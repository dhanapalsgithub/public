const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); 
const nodemailer = require('nodemailer'); 
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


// --- 1. Middleware ---
app.use(cors({
    // Ensure the client URL is listed here
    origin:["https://public-jwy3.vercel.app", "https://public-beta-rose.vercel.app","http://localhost:3001"], 
    methods: ["GET", "POST", "DELETE", "OPTIONS"], 
    credentials: true,
    allowedHeaders: ["Content-Type"] 
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


// --- 2. Email Transporter Setup (REQUIRED FOR MAILING CONTACT FORM SUBMISSIONS) ---
// **IMPORTANT: Replace "smtp.example.com" with your actual SMTP host (e.g., smtp.gmail.com).**
// **If using Gmail, set 'secure: true' and 'port: 465'.**
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // <-- FIX/UPDATE THIS
    port: 465, // <-- FIX/UPDATE THIS (e.g., 465 for secure Gmail)
    secure: true, // <-- FIX/UPDATE THIS (e.g., true for 465)
    auth: {
        user: process.env.EMAIL_USER,    // Your sender email
        pass: process.env.EMAIL_PASS     // Your App Password
    },
    pool: true,
    maxConnections: 1,
    tls: {
        rejectUnauthorized: false 
    }
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

// Contact Form Submission (Saves to DB and Sends Email)
app.post("/contact", (req, res) => {
    const { name = "", email = "", message = "" } = req.body; 
    
    // 1. Save to Database
    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err) => {
        if (err) {
            console.error("CONTACT DB ERROR:", err.message);
            return res.status(500).json({ message: "DB Insert Error", error: err.message });
        }

        // 2. Send Email Notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "riengineeringtech@yahoo.com", // <-- SET YOUR ADMIN RECEIVING EMAIL
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h3>New Message Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="border: 1px solid #ccc; padding: 10px;">${message}</p>
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("CONTACT EMAIL ERROR:", error.message);
                // Note: We send success to client even if email fails, as DB insert was successful.
            } else {
                console.log('Contact email sent: ' + info.response);
            }
        });
        
        res.json({ message: "Message Sent Successfully!" });
    });
});

// Admin Route to Fetch Contacts
app.get("/admin/contacts", (req, res) => {
    db.query("SELECT * FROM contacts ORDER BY id DESC", (err, result) => {
        if (err) return res.status(500).json({ message: "DB Error" });
        res.json(result);
    });
});

// Admin Route to Delete Contact
app.delete("/admin/contacts/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM contacts WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).json({ message: "DB Delete Error" });
        res.json({ message: "Message Deleted" });
    });
});


// Server Start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));