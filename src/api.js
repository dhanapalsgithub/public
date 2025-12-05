// src/api.js
import axios from "axios";

// 1. Define the correct environment variable name used in Vercel/frontend build.
//    (Based on standard React/Vite conventions, using a prefix is common.)
// 2. Provide a safe fallback (e.g., http://localhost:3000) for local development 
//    when the live environment variable (REACT_APP_API_BASE) is not yet set.

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000"; 

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default API;