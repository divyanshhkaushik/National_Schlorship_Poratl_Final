import { Router } from "express";
import { z } from "zod";

import {
  requireStudentAuth,
  requireInstituteAuth,
} from "../middleware/auth.js"; //only authenticated students and institute can access.
import { Student } from "../models/Student.js";
import { Institute } from "../models/Institute.js";

export const meRouter = Router();

const patchSchema = z //to update the student profile only
  .object({
    state: z.string().trim().min(1).optional(),
    district: z.string().trim().min(1).optional(),
    name: z.string().trim().min(1).optional(),
    dob: z.string().trim().min(1).optional(),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
    mobile: z.string().trim().min(10).max(15).optional(),
    email: z.string().trim().email().optional(),
    instituteCode: z.string().trim().min(1).optional(),
    aadhar: z.string().trim().min(12).max(12).optional(),
    bankIfsc: z
      .string()
      .trim()
      .regex(/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/, "Invalid IFSC Code")
      .optional(),
    bankAccount: z.string().trim().min(6).optional(),
    bankName: z.string().trim().min(2).optional(),
  })
  .strip();

meRouter.get("/institute", requireInstituteAuth, async (req, res, next) => {
  //Fetching currently logged-in institute’s profile.
  try {
    console.log(
      `[me] Fetching profile for Institute ID: ${req.auth.instituteId}`,
    );
    const institute = await Institute.findById(req.auth.instituteId).select(
      "-passwordHash",
    );
    if (!institute)
      return res.status(404).json({ error: "Institute not found" });
    console.log(
      `[me] Found institute: ${institute.name} (${institute.instId})`,
    );

    return res.json({ institute });
  } catch (err) {
    return next(err);
  }
});

meRouter.patch("/", requireStudentAuth, async (req, res, next) => {
  //Update the student's profile
  try {
    const patch = patchSchema.parse(req.body);

    if (patch.email) patch.email = patch.email.toLowerCase();

    const student = await Student.findByIdAndUpdate(
      req.auth.studentId,
      { $set: patch },
      { new: true, runValidators: true, context: "query" },
    ).select("-passwordHash");

    if (!student) return res.status(401).json({ error: "Unauthorized" });

    return res.json({ student });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: "Invalid input", details: err.issues });
    }
    if (err?.code === 11000) {
      return res.status(409).json({ error: "Duplicate field (email/mobile)" });
    }
    return next(err);
  }
});
