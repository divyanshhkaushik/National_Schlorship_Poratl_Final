# NSP Final Workspace

National Scholarship Portal is a MERN stack application for managing scholarship applications, institute verification, and government approval workflows.

This repository is organized as a **single workspace** with two main application folders:

- `Backend_(server)` → Express + MongoDB API
- `nsp-final_(FrontEnd)` → React + Vite frontend

The root folder also contains the workspace `package.json`, `README.md`, and `.gitignore`, so the project can be opened and understood from one GitHub repo.

---

## Project Overview

The platform supports the following users and workflows:

- **Students** register, log in, update profile, and apply for scholarships.
- **Institutes** register, submit proof documents, and view/verify student applications.
- **State Officers** review institute registrations and scholarship applications.
- **Ministry Officers** make final approval or rejection decisions.

The application includes:

- Role-based access control
- Seed data for default officer accounts
- Frontend routing with protected routes

---

### Frontend

- **React** for UI rendering
- **Vite** for fast development and bundling
- **Axios** for API communication
- **Tailwind CSS** for styling
- **Chart.js** and **react-chartjs-2** for dashboard visualizations

### Backend

- **Node.js** runtime
- **Express.js** for REST APIs
- **MongoDB** as the database
- **Mongoose** for schema modeling and validation
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Zod** for request validation
- **cookie-parser** for auth cookie handling
- **cors** for cross-origin requests
- **helmet** for HTTP security headers
- **express-rate-limit** for brute-force protection
- **nodemailer** for OTP email delivery

---

## Repository Structure

```text
NSP_FINAL_MAIN/
├── Backend_(server)/              # Express + MongoDB backend
│   ├── scripts/                   # Seed and utility scripts
│   ├── src/                       # Backend source code
│   │   ├── controllers/           # Business logic for each route
│   │   ├── middleware/            # Auth and request guards
│   │   ├── models/                # Mongoose schemas and models
│   │   ├── routes/                # Express route definitions
│   │   └── utils/                 # DB, env, cookie, email helpers
│   ├── .env                       # Local backend secrets
│   ├── .env.example               # Backend environment template
│   └── package.json               # Backend scripts and dependencies
├── nsp-final_(FrontEnd)/          # React + Vite frontend
│   ├── src/                       # Frontend source code
│   │   ├── components/            # Reusable UI and layout components
│   │   ├── context/               # Global auth/state context
│   │   ├── hooks/                 # Custom hooks
│   │   ├── pages/                 # Route-level screens
│   │   ├── routes/                # Route config and guards
│   │   ├── services/              # Axios/API layer
│   │   └── utils/                 # Frontend helper functions
│   ├── .env.example               # Frontend environment template
│   ├── package.json               # Frontend scripts and dependencies
│   └── vite.config.js             # Vite configuration
├── .gitignore                     # Prevents secrets and build files from being committed
├── package.json                   # Root workspace scripts (concurrently)
└── README.md                      # Project documentation
```

### Folder Usage

#### `Backend_(server)`

- Holds the API server, database models, route handlers, validation, and seed scripts.
- Use this folder when you want to update authentication, MongoDB logic, institute/student/officer workflows, or backend validation.

#### `nsp-final_(FrontEnd)`

- Holds the React UI, route pages, dashboard screens, context, reusable components, and API calls.
- Use this folder when you want to update forms, dashboards, page navigation, or frontend styling.

#### Root folder

- Holds the workspace-level `package.json` for `concurrently`, the main `README.md`, and `.gitignore`.
- Use the root when you want to install once, run both apps together, or document the whole project.

#### `scripts/`

- Used for automation tasks like seeding officer accounts into MongoDB.
- Run these scripts when you need initial demo data or testing credentials.

#### `.env` and `.env.example`

- `.env` stores private local secrets and should never be pushed.
- `.env.example` shows required keys so other developers can configure their local setup safely.

## Backend Architecture

- configures middleware (`cors`, `helmet`, `cookie-parser`, rate limiter)
- mounts API routers
- starts the HTTP server

### `src/routes`

Routes define URL endpoints and connect them to controller functions.

- `auth.js` handles register, login, logout, forgot password, officer actions, and scholarship flows
- `me.js` handles profile fetch and student profile updates

### `src/controllers`

Controllers contain the business logic.

- `studentController.js` handles student registration, login, logout, OTP reset, and password reset
- `instituteController.js` handles institute registration, login, and institute lookup by code
- `officerController.js` handles officer login and institute approval workflows
- `scholarshipController.js` handles scholarship application submission and approval stages

### `src/models`

Mongoose models define the database structure.

- `Student.js`
- `Institute.js`
- `Officer.js`
- `PasswordReset.js`

### `src/middleware`

- `auth.js` verifies JWT cookies and protects student, institute, and officer routes

### `src/utils`

- `db.js` handles MongoDB connection
- `env.js` reads and validates environment variables
- `cookies.js` sets and clears auth cookies

- `seed-officers.js` creates default officer accounts for testing and demo use

---

## Frontend Architecture

### `src/pages`

Each page represents a full screen or route.

- Home, About, Contact
- Student registration, login, dashboard, profile, and application forms
- Institute registration, dashboard, and profile pages
- State and ministry dashboards
- Forgot password and scholarship status pages

### `src/routes`

- `AppRoutes.jsx` centralizes route definitions
- `ProtectedRoute.jsx` guards authenticated pages

### `src/context`

- `AuthContext.jsx` stores global auth state on the client

### `src/services`

- `api.js` centralizes backend API access through Axios

### `src/components`

- `common/` contains reusable UI controls such as buttons, inputs, loaders, and modals
- `layout/` contains layout components such as navbar, footer, and sidebar

---

## Environment Variables

### Backend `.env`

Create `Backend_(server)/.env` using the template from `Backend_(server)/.env.example`.

Example keys:

```env
PORT=5174
NODE_ENV=development
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db>
JWT_SECRET=your-secret-key
FRONTEND_ORIGIN=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@example.com
```

### Frontend `.env`

Create `nsp-final_(FrontEnd)/.env` using `nsp-final_(FrontEnd)/.env.example`.

Example:

```env
VITE_API_URL=http://localhost:5174/api
```

> Do not commit real `.env` files. Keep secrets local only.

---

## Installation

Install dependencies for all three package scopes:

```powershell
cd "c:\Users\2488261\OneDrive - Cognizant\Desktop\NSP_Final_Main\Backend_(server)"
npm install

cd "c:\Users\2488261\OneDrive - Cognizant\Desktop\NSP_Final_Main\nsp-final_(FrontEnd)"
npm install

cd "c:\Users\2488261\OneDrive - Cognizant\Desktop\NSP_Final_Main"
npm install
```

---

## Running the Project

### Option 1: Run both apps from the root folder

This uses **concurrently** to start frontend and backend together.

```powershell
cd "c:\Users\2488261\OneDrive - Cognizant\Desktop\NSP_Final_Main"
npm run dev
```

- `npm run client` → starts the frontend
- `npm run server` → starts the backend
- `npm run dev` → starts both together
- `npm run seed` → runs the seed script in `Backend_(server)`

### Default seeded officer accounts

The backend seed script creates these demo accounts if they do not already exist:

- **State Officer**: `stateoffice@gmail.com` / `admin123`
- **Ministry Officer**: `centraloffice@gmail.com` / `admin123`

### Option 2: Run apps separately

Backend:

```powershell
cd "c:\Users\2488261\OneDrive - Cognizant\Desktop\NSP_Final_Main\Backend_(server)"
npm run dev
```

Frontend:

```powershell
cd "c:\Users\2488261\OneDrive - Cognizant\Desktop\NSP_Final_Main\nsp-final_(FrontEnd)"
npm run dev
```

### MongoDB Compass Setup

If you want to inspect the database in MongoDB Compass:

1. Open **MongoDB Compass**
2. Paste the `MONGODB_URI` from `Backend_(server)/.env`
3. Click **Connect**
4. Open the `nsp` database from the left panel

If your URI includes the database name, Compass will connect directly to that database instead of defaulting to `test`.

---

## Seeding Default Officers

The backend includes a seed script that creates default officer accounts if they do not already exist.

Run it from the root:

```powershell
cd "c:\Users\2488261\OneDrive - Cognizant\Desktop\NSP_Final_Main"
npm run seed
```

Default credentials used in the project:

- **State Officer**: `stateoffice@gmail.com` / `admin123`
- **Ministry Officer**: `centraloffice@gmail.com` / `admin123`

---

## Security Notes

- Passwords are stored only as hashes using `bcryptjs`
- JWTs are stored in HTTP-only cookies
- `.env` files are ignored through `.gitignore`
- Validation is handled using `zod` before data reaches the database
- Rate limiting helps protect login and API endpoints

---

## Key User Flows

### Student Flow

1. Student registers
2. Student logs in
3. Student updates profile
4. Student checks institute details
5. Student applies for a scholarship
6. Student tracks application status

### Institute Flow

1. Institute registers with proof documents
2. State officer reviews the institute
3. Ministry officer approves or rejects the institute
4. Approved institutes can verify scholarship applications

### Officer Flow

1. Officer logs in
2. Officer views institute approvals
3. Officer forwards or finalizes institute decisions
4. Officer reviews scholarship applications at the appropriate stage

---

## Interview Summary

If you need to explain this project in an interview, you can say:

> “This is a MERN-based National Scholarship Portal that separates frontend and backend cleanly. The backend uses Express, MongoDB, Mongoose, JWT, and Zod for secure and structured API handling, while the frontend uses React, Vite, and React Router for a responsive multi-role dashboard experience. I also configured a root workspace package with concurrently so both apps can be started together using a single command.”

---

## Notes

- Keep the repository clean by committing only source files, `README.md`, `.gitignore`, and `.env.example` templates.
- Never commit real secrets from `.env`.
- If you update environment keys or ports, also update the examples and the README.
