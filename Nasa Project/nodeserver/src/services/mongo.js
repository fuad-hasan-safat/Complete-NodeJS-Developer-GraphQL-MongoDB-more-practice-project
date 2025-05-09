const mongoose = require("mongoose");

mongoose.connection.once('open', () => {
    console.log("MongoDB connection is ready");
})

mongoose.connection.on("error", (err) => {
    console.error(err);
})

async function mongoConnect(params) {
    await mongoose.connect("mongodb://localhost:27017/testnasaproject")
}

async function mongoDisconnect(){
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}