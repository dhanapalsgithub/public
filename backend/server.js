const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql2"); 
const path = require("path");
const fs = require("fs");
const nodemailer = require('nodemailer'); // <--- NEW: மின்னஞ்சலுக்காக சேர்க்கப்பட்டது
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


// --- Helper Function ---
const valueOrNull = (value) => {
    if (value === "" || value === undefined || value === null) {
        return null;
    }
    return value;
};
// -----------------------


// --- 1. Middleware ---
app.use(cors({
  origin:["https://public-jwy3.vercel.app", "https://public-beta-rose.vercel.app","http://localhost:3001"], 
  methods: ["GET", "POST", "DELETE", "OPTIONS"], 
  credentials: true,
  allowedHeaders: ["Content-Type"] 
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
app.use("/uploads", express.static("uploads"));

// Multer Storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });


// --- 2. Email Transporter Setup (மின்னஞ்சல் அமைப்பு) ---
// Railway ENV மாறிகளைப் பயன்படுத்துகிறது: EMAIL_USER மற்றும் EMAIL_PASS
const transporter = nodemailer.createTransport({
    // உங்கள் மின்னஞ்சல் சேவை வழங்குநரின் SMTP அமைப்புகளை இங்கே உள்ளிடவும்
    // எடுத்துக்காட்டாக: Gmail, SendGrid, அல்லது உங்கள் ஹோஸ்டிங் சேவை
    host: "smtp.example.com", 
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,    // உங்கள் அனுப்புநரின் மின்னஞ்சல்
        pass: process.env.EMAIL_PASS     // உங்கள் கடவுச்சொல்/ஆப் கீ
    },
});

// --- 3. MySQL Connection (Using Pool for Production Robustness) ---
const db = mysql.createPool({ 
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectTimeout: 20000,
  charset: "utf8mb4",
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("DB ERROR:", err.sqlMessage || err.message || err);
  } else {
    connection.release(); 
    console.log("MySQL Pool Connected and Ready ✅");
  }
});

// --- 4. Routes ---

// Health Check
app.get("/", (req, res) => {
  res.send("Backend is live ✅");
});

// Contact Form (No change needed here)
app.post("/contact", (req, res) => {
  const { name = "", email = "", message = "" } = req.body; 
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err) => {
    if (err) {
      return res.status(500).json({ message: "DB Insert Error", error: err.message });
    }
    res.json({ message: "Message Sent Successfully!" });
  });
});


// Apply Job - UPDATED WITH EMAIL LOGIC (மின்னஞ்சல் லாஜிக்குடன் புதுப்பிக்கப்பட்டது)
app.post("/apply", upload.single("resume"), (req, res) => {
  const {
    jobTitle = "",
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    experience = "",
    linkedin = "",
    portfolio = "",
    message = "",
    skills = ""
  } = req.body;

  const resumeFile = req.file ? req.file.filename : "";
  
  const sql = `
    INSERT INTO applications 
    (jobTitle, firstName, lastName, email, phone, experience, linkedin, portfolio, message, skills, resume)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  const values = [
    valueOrNull(jobTitle), valueOrNull(firstName), valueOrNull(lastName), 
    valueOrNull(email), valueOrNull(phone), valueOrNull(experience), 
    valueOrNull(linkedin), valueOrNull(portfolio), valueOrNull(message), 
    valueOrNull(skills), valueOrNull(resumeFile)
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error("APPLICATION DB ERROR:", err.sqlMessage || err.message || err);
      return res.status(500).json({ message: "DB Insert Error", error: err.sqlMessage || err.message });
    }
    
    // --- மின்னஞ்சல் அனுப்புதல் (Email Sending) ---
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "admin@yourcompany.com", // <-- உங்கள் நிர்வாகி மின்னஞ்சல் முகவரியை இங்கே உள்ளிடவும்
        subject: `New Job Application: ${jobTitle} from ${firstName} ${lastName}`,
        html: `
            <h3>New Job Application Received</h3>
            <p><strong>Job Title:</strong> ${jobTitle}</p>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Experience:</strong> ${experience || 'N/A'}</p>
            <p><strong>LinkedIn:</strong> ${linkedin || 'N/A'}</p>
            <p><strong>Portfolio:</strong> ${portfolio || 'N/A'}</p>
            <p><strong>Skills:</strong> ${skills || 'N/A'}</p>
            <p><strong>Message:</strong> ${message || 'N/A'}</p>
        `,
        attachments: req.file ? [{
            filename: req.file.originalname,
            path: path.join(uploadDir, resumeFile) // கோப்பு உள்ளூர் 'uploads' கோப்புறையிலிருந்து அனுப்பப்படுகிறது
        }] : []
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // மின்னஞ்சல் அனுப்பும் பிழையை Log செய்யவும்
            console.error("APPLICATION EMAIL ERROR:", error.message);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    // ---------------------------------------------
    
    res.json({ message: "Application Submitted!" });
  });
});

// Admin Routes (No change needed here)
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

// Server Start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));