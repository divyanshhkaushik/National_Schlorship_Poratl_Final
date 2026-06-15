import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; //creates authentication tokens
import { z } from "zod";

import { Institute } from "../models/Institute.js";
import { env } from "../utils/env.js";
import { setAccessCookie } from "../utils/cookies.js";

const addressSchema = z.object({
  addr1: z.string().trim().min(1),
  addr2: z.string().trim().optional().default(""),
  city: z.string().trim().min(1),
  addrState: z.string().trim().min(1),
  addrDistrict: z.string().trim().min(1),
  pincode: z
    .string()
    .trim()
    .regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),
});

const registerInstituteSchema = z
  .object({
    category: z.string().trim().min(1),
    name: z.string().trim().min(1),
    state: z.string().trim().min(1),
    district: z.string().trim().min(1),
    code: z
      .string()
      .trim()
      .regex(/^NSP\d{3}$/, "Institute Code must be NSP followed by 3 digits"),
    dise: z
      .string()
      .trim()
      .regex(/^\d{11}$/, "DISE code must be exactly 11 digits"),
    location: z.enum(["Rural", "Urban"]).default("Rural"),
    type: z.string().trim().min(1),
    uniState: z.string().trim().min(1),
    uniName: z.string().trim().min(1),
    admissionYear: z.string().trim().min(1),
    password: z.string().min(6),
    confirmPassword: z.string().optional(),
    principal: z.string().trim().min(1),
    mobile: z
      .string()
      .trim()
      .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    telephone: z.string().trim().optional().default(""),
    addr1: z.string().trim().min(1),
    addr2: z.string().trim().optional().default(""),
    city: z.string().trim().min(1),
    addrState: z.string().trim().min(1),
    addrDistrict: z.string().trim().min(1),
    pincode: z
      .string()
      .trim()
      .regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),
    agree: z.boolean().optional(),
  })
  .strip();

const loginInstituteSchema = z
  .object({
    uid: z.string().trim().min(1),
    password: z.string().min(1),
  })
  .strip();

export const registerInstitute = async (req, res, next) => {
  try {
    const body = registerInstituteSchema.parse(req.body ?? {});
    const address = addressSchema.parse(body);

    if (body.confirmPassword && body.confirmPassword !== body.password) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const lastInst = await Institute.findOne().sort({ createdAt: -1 }); //get the last Institute ID
    let nextNum = 1;
    if (lastInst && lastInst.instId) {
      const match = lastInst.instId.match(/NSP(\d+)/);
      if (match) nextNum = parseInt(match[1]) + 1; //Create new Institute ID as Incremented, eg: NSP001, NSP002
    }
    const instId = `NSP${String(nextNum).padStart(3, "0")}`;
    const passwordHash = await bcrypt.hash(body.password, 12);

    const institute = await Institute.create({
      ...body,
      instId,
      passwordHash,
      address,
    });

    return res.status(201).json({ ok: true, instId: institute.instId });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: "Invalid input", details: err.issues });
    }
    return next(err);
  }
};

export const loginInstitute = async (req, res, next) => {
  try {
    const { uid, password } = loginInstituteSchema.parse(req.body ?? {}); //uid can be phone no. , institute id, or Code
    if (!uid || !password)
      return res.status(400).json({ error: "Missing fields" });

    const institute = await Institute.findOne({
      $or: [{ instId: uid }, { code: uid }, { mobile: uid }],
    });
    if (!institute)
      return res.status(401).json({ error: "Invalid credentials" });
    if (institute.status !== "Approved")
      return res.status(403).json({ error: "Institute not approved" });

    const ok = await bcrypt.compare(password, institute.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ typ: "institute" }, env.jwtSecret, {
      subject: String(institute._id),
      expiresIn: "1h",
    });
    setAccessCookie(res, token);
    return res.json({ ok: true, instId: institute.instId, token });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: "Invalid input", details: err.issues });
    }
    return next(err);
  } //cookie based session for 1 hr
};

export const getInstituteNameByCode = async (req, res, next) => {
  try {
    const { code } = req.params;
    const institute = await Institute.findOne({ instId: code });

    if (!institute)
      return res.status(404).json({ error: "Institute not found" });
    if (institute.status !== "Approved")
      return res.status(403).json({ error: "Institute not approved yet" });

    return res.json({ name: institute.name });
  } catch (err) {
    return next(err);
  }
};
