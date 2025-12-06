const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
// ❌ Nodemailer dependency and imports are fully removed.
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Define allowed origins once for consistency
const ALLOWED_ORIGINS = [
    "https://public-beta-rose.vercel.app", 
    "https://public-jwy3.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001"
];

// --- 1. Middleware (CORS Configuration - Standard Use) ---
// This handles CORS for simple requests and acts as the primary configuration.
app.use(cors({
    origin: ALLOWED_ORIGINS,
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    optionsSuccessStatus: 200 
}));

// --- 2. CRITICAL FIX: Explicit OPTIONS Route for Preflight ---
// This guarantees the necessary headers are sent for the Preflight (OPTIONS) request, 
// which is failing and causing the "Provisional headers" error.
app.options('*', (req, res) => {
    const origin = req.header('Origin');
    
    // Check if the requesting origin is in our allowed list
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    } else {
        // If not allowed, send 403 Forbidden (optional, but good practice)
        return res.sendStatus(403);
    }

    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(200); // Send 200 OK for successful preflight
});


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


// --- 3. MySQL Connection ---
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