const { launches } = require("../../models/launches.model");

async function getAllLaunches(req, res) {
    try {
        return res.status(200).json(Array.from(launches.values()));
    } catch (error) {
        console.error('Error fetching launches:', error);
        return res.status(500).json({ error: 'Failed to fetch launches' });
    }
}

module.exports = {
    getAllLaunches,
};