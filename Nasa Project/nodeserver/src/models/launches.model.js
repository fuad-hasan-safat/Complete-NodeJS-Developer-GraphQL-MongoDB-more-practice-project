const launches = require('./lunches.mongo');

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    missionName: "Zephyr",
    rocket: "Falcon 9",
    launchDate: new Date("January 1, 2020"),
    target: "Kepler-22 f",
    customers: ["SpaceX", "NASA"],
    upcoming: true,
    success: true
    }

function getAllLaunches() {
    return Array.from(launches.values());
}
function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch,
            {
                flightNumber: latestFlightNumber,
                upcoming: true,
                success: true,
                customers: ["Fuad Hasan", "NASA"]
            }
        ));
}
function abrotLaunchById(launchId) {
    const aborted = launches.get(launchId);
    if (aborted) {
        aborted.upcoming = false;
        aborted.success = false;
    }
    return aborted;
}


module.exports = {
    getAllLaunches,
    addNewLaunch,
    abrotLaunchById,

}