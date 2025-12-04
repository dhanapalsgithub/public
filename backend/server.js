const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// ========================
// Middleware
// ========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve resume files
app.use("/uploads", express.static("uploads"));

// ========================
// Multer Storage
// ========================
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// ========================
// MySQL Connection (Railway)
// ========================
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectTimeout: 20000,
  charset: "utf8mb4"
});

db.connect((err) => {
  if (err) {
    console.error("DB ERROR:", err.sqlMessage || err.message || err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

// ========================
// HEALTH CHECK
// ========================
app.get("/", (req, res) => {
  res.send("Backend is live ✅");
});

app.get("/apply", (req, res) => {
  res.send("Apply endpoint is live. Use POST to submit resume.");
});

// ========================
// CONTACT FORM
// ========================
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("CONTACT ERROR:", err.sqlMessage || err.message || err);
      return res.status(500).json({
        message: "DB Insert Error",
        error: err.sqlMessage || err.message
      });
    }
    res.json({ message: "Message Sent Successfully!" });
  });
});

// ========================
// APPLY JOB
// ========================
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
    (err) => {
      if (err) {
        console.error("APPLICATION ERROR:", err.sqlMessage || err.message || err);
        return res.status(500).json({
          message: "DB Insert Error",
          error: err.sqlMessage || err.message
        });
      }
      res.json({ message: "Application Submitted!" });
    }
  );
});

// ========================
// ADMIN ROUTES
// ========================
app.get("/admin/contacts", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(result);
  });
});

app.get("/admin/applications", (req, res) => {
  db.query("SELECT * FROM applications ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(result);
  });
});

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
