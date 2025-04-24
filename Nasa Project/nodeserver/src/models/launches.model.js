const launches = new Map();

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

launches.set(launch.flightNumber, launch);

module.exports = {
    launches
}