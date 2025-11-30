const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456", // <-- your actual root password
  database: "job_portal"
});

db.connect((err) => {
  if (err) console.log("DB ERROR", err);
  else console.log("MySQL Connected");
});
