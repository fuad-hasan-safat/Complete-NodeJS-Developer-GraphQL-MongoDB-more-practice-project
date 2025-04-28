const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // Busy wait
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});


app.get('/timer', (req, res) => {
    delay(4000);
    res.send(`dealyed response: ${process.pid}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});