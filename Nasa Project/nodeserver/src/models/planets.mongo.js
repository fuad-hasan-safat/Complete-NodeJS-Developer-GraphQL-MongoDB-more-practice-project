const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
    keplername: {
        type: String,
        rewuired: true
    }
});

module.exports = mongoose.model('Planet', planetsSchema);