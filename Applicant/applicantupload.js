const express = require('express');
const mysql = require('mysql');
const app = express();

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database!');
});

// Body parser middleware to parse HTTP POST request body
app.use(express.urlencoded({ extended: false }));

// Serve the HTML form page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const fullName = req.body.fullName;
  const certificateName = req.body.certificateName;
  const certificateType = req.body.certificateType;
  const institute = req.body.institute;
  const verifier = req.body.verifier;

  // Insert the data into the database
  const sql = `INSERT INTO certificates (full_name, certificate_name, certificate_type, institute, verifier) VALUES ('${fullName}', '${certificateName}', '${certificateType}', '${institute}', '${verifier}')`;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Data inserted successfully!');
    res.redirect('/success.html');
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
