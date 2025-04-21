const http = require("http");
const app = require("./app");
const { loadHabitablePlanets } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadHabitablePlanets()

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
}

startServer();
