import React, { useEffect, useState } from "react";
import "./AdminPanel.css";
import API from '../api';

function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAdmin") === "true");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [contacts, setContacts] = useState([]);
  const [applications, setApplications] = useState([]);

  // Fetch data
  const fetchData = async () => {
    try {
      const contactRes = await API.get("/admin/contacts");
      setContacts(contactRes.data);

      const appRes = await API.get("/admin/applications");
      setApplications(appRes.data);
    } catch (err) {
      console.error("Error fetching admin data:", err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchData();
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      setIsLoggedIn(true);
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setPassword("");
    setError("");
  };

  // Login page
  if (!isLoggedIn) {
    return (
      <div className="admin-background">
        <header className="admin-header">
          <h1>Admin Login</h1>
        </header>
        <div className="login-container">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error">{error}</p>}
        </div>
        <footer className="admin-footer">
          <p>© 2025 R & I Engineering And Technology. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  // Dashboard page (read-only)
  return (
    <div className="admin-background">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <main className="dashboard-container">
        {/* Contact Messages */}
        <section>
          <h2>Contact Messages</h2>
          <table>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Message</th></tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Job Applications */}
        <section>
          <h2>Job Applications</h2>
          <table>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Phone</th><th>Resume</th></tr>
            </thead>
            <tbody>
              {applications.map((a, i) => (
                <tr key={i}>
                  <td>{a.firstName} {a.lastName}</td>
                  <td>{a.email}</td>
                  <td>{a.phone}</td>
                  <td>
                    {a.resume ? (
                      <a
                        href={`${process.env.REACT_APP_API_URL}/uploads/${a.resume}`}
                        download
                      >
                        Download
                      </a>
                    ) : "No file"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer className="admin-footer">
        <p>© 2025 R & I Engineering And Technology All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AdminPanel;
