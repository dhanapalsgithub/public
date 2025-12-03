const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads folder exists (Render restarts delete it)
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve resume files
app.use("/uploads", express.static("uploads"));

// Storage for Resume Upload
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// MySQL Connection (use env variables in Render)
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  database: process.env.DB_NAME || "job_portal"
});

db.connect((err) => {
  if (err) console.log("DB ERROR", err);
  else console.log("MySQL Connected");
});

// ========================
// HEALTH CHECK ROUTES
// ========================
app.get("/", (req, res) => {
  res.send("Backend is live ✅");
});

app.get("/apply", (req, res) => {
  res.send("Apply endpoint is live. Use POST to submit resume.");
});

// ========================
// APPLY JOB ROUTE
// ========================
// Health check for /apply
app.get("/apply", (req, res) => {
  res.send("Apply endpoint is live. Use POST to submit resume.");
});

app.post("/apply", upload.single("resume"), (req, res) => {
  const {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    experience,
    linkedin,
    portfolio,
    message,
    skills
  } = req.body;

  const resumeFile = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO applications 
    (jobTitle, firstName, lastName, email, phone, experience, linkedin, portfolio, message, skills, resume)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      jobTitle,
      firstName,
      lastName,
      email,
      phone,
      experience,
      linkedin,
      portfolio,
      message,
      skills,
      resumeFile
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "DB Insert Error" });
      }
      res.json({ message: "Application Submitted!" });
    }
  );
});

// ========================
// CONTACT FORM ROUTE
// ========================

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log("CONTACT ERROR:", err);
      return res.status(500).json({ message: "DB Insert Error" });
    }
    res.json({ message: "Message Sent Successfully!" });
  });
});

// ========================
// ADMIN ROUTES
// ========================

// Get all contact messages
app.get("/admin/contacts", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(result);
  });
});

// Get all job applications
app.get("/admin/applications", (req, res) => {
  db.query("SELECT * FROM applications ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(result);
  });
});

// Delete contact message
app.delete("/admin/contacts/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM contacts WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ message: "DB Delete Error" });
    res.json({ message: "Message Deleted" });
  });
});

// ========================
// SERVER START
// ========================
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
