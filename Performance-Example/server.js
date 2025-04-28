const express = require('express');
const cluster = require('cluster');
const os = require('os');

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
    delay(9000);
    res.send(`dealyed response: ${process.pid}`);
});



if (cluster.isMaster) {
    console.log(`Master  is running`);
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();
    }
} else {
    console.log(`Worker started`);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}