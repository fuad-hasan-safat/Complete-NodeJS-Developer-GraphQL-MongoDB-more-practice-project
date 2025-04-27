const { 
    addNewLaunch,
    getAllLaunches, 
    abrotLaunchById
} = require("../../models/launches.model");

async function existLaunchWithId(id){
    return getAllLaunches().find(launch => launch.flightNumber === id);
}

async function httpgetAllLaunches(req, res) {
    try {
        return res.status(200).json(getAllLaunches());
    } catch (error) {
        console.error('Error fetching launches:', error);
        return res.status(500).json({ error: 'Failed to fetch launches' });
    }
}

async function httpaddNewLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({ 
            ok: false,
            error: 'Missing required launch property' });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({ error: 'Invalid launch date, date formate is January 14, 2030' });
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
    if (!existLaunchWithId(launchId)) {
        return res.status(400).json({ error: 'Invalid launch ID' });
    }
    const aborted = abrotLaunchById(launchId);
    if (!aborted) {
        return res.status(404).json({ error: 'Launch not found' });
    }
    return res.status(200).json(aborted);
}

module.exports = {
    existLaunchWithId,
    httpgetAllLaunches,
    httpaddNewLaunch,
    httpAbortLaunch
};