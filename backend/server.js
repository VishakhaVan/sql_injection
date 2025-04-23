const express = require('express');
const mysql = require('mysql2'); // use mysql2 instead of mysql

const cors = require('cors');
const fs = require('fs');
const https = require('https');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@123',
    database: 'news_site'
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    // Note: This is vulnerable to SQL injection. Do not use in production.
    // Use parameterized queries or ORM to prevent SQL injection.
    // Example of a parameterized query:
    // const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    // db.query(sql, [username, password], (err, results) => {
    //     if (err) {
    //         console.error("SQL Error:", err);  // Log the actual error
    //         return res.json({ message: 'Error' });
    //     }
    //     if (results.length > 0) { 
    //         res.json({ message: 'Login successful' });
    //     } else {
    //         res.json({ message: 'Invalid credentials' });
    //     }
    // });


    db.query(sql, (err, results) => {
        if (err) {
            console.error("SQL Error:", err);  // Log the actual error
            return res.json({ message: 'Error' });
        }
        if (results.length > 0) {
            res.json({ message: 'Login successful' });
        } else {
            res.json({ message: 'Invalid credentials' });
        }
    });
});




app.get('/', (req, res) => {
    res.send('Welcome to the SQL Injection Demo Server!');
});

app.get('/api/login', (req, res) => {
    res.send('Login endpoint');
});
// HTTP server (demo of attack)
app.listen(5000, () => console.log('HTTP server running at http://localhost:5000'));

// HTTPS server (secure version)
https.createServer({
    key: fs.readFileSync('../certs/key.pem'),
    cert: fs.readFileSync('../certs/cert.pem')
}, app).listen(5443, () => {
    console.log('HTTPS server running at https://localhost:5443');
});
