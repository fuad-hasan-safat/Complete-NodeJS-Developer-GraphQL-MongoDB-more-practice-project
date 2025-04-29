const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadHabitablePlanets } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connection.once('open', ()=> {
    console.log("MongoDB connection is ready");
})

mongoose.connection.on("error", (err) => {
    console.error(err);
})
const start = async () => {
    await loadHabitablePlanets()

    try {
        await mongoose.connect(
            "mongodb://localhost:27017/nasaproject");
        server.listen(PORT, () => {
            console.log(`Nasa project Server is running on port ${PORT} and mongoose running`)
        })

        // app.listen(3000, () => console.log("Server started on port 3000. mongoose done"));
    } catch (error) {
        console.error(error);
        console.log("MONGOOSE ERROR")
        process.exit(1);
    }
};

start();

// startServer();
