const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); 
// ❌ Nodemailer dependency and imports are fully removed.
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


// --- 1. Middleware (CORS Configuration - Crucial for Vercel) ---
// Allows requests ONLY from the specified Vercel domains and localhost.
app.use(cors({
    origin: [
        "https://public-jwy3.vercel.app", 
        "https://public-beta-rose.vercel.app",
        "http://localhost:3001"
    ], 
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"], 
    optionsSuccessStatus: 200 
}));

// Recommended: Explicitly handle OPTIONS (preflight) requests
app.options('*', cors({
    origin: [
        "https://public-jwy3.vercel.app", 
        "https://public-beta-rose.vercel.app", 
        "http://localhost:3001"
    ], 
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    credentials: true,
}));


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


// --- 2. MySQL Connection ---
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

// --- 3. Routes ---

// Health Check
app.get("/", (req, res) => {
    res.send("Backend is live ✅");
});

// Contact Form Submission (Saves only to Database)
app.post("/contact", (req, res) => {
    const { name = "", email = "", message = "" } = req.body; 
    
    // 1. Save to Database
    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err) => {
        if (err) {
            console.error("CONTACT DB ERROR:", err.message);
            return res.status(500).json({ message: "DB Insert Error", error: err.message });
        }
        
        // 2. Respond to Frontend after successful database save
        res.json({ message: "Message Sent Successfully!" });
    });
});

// Admin Route to Fetch Contacts
app.get("/admin/contacts", (req, res) => {
    db.query("SELECT * FROM contacts ORDER BY id DESC", (err, result) => {
        if (err) {
            console.error("ADMIN FETCH DB ERROR:", err.message);
            return res.status(500).json({ message: "DB Error" });
        }
        res.json(result);
    });
});

// Admin Route to Delete Contact
app.delete("/admin/contacts/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM contacts WHERE id = ?", [id], (err) => {
        if (err) {
            console.error("ADMIN DELETE DB ERROR:", err.message);
            return res.status(500).json({ message: "DB Delete Error" });
        }
        res.json({ message: "Message Deleted" });
    });
});


// Server Start (FIXED: Explicitly binds to 0.0.0.0 for Railway/Cloud environments to prevent 502 Bad Gateway)
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
    console.log(`Server running successfully on host ${HOST} and port ${PORT} ✅`);
});