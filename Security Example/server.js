const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');


const PORT = 3000;

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/secret', (req, res) => {
    res.send('This is a secret page!');
});

https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
}, app).listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});