const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');

const planets = require('./planets.mongo');
const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}


function loadHabitablePlanets() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', async (data) => {
            if (isHabitablePlanet(data)) {
                await planets.create({
                    keplername: data.kepler_name
                });
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            console.log(habitablePlanets.map((planet) => {
                return planet['kepler_name'];
            }));
            console.log(`${habitablePlanets.length} habitable planets found!`);
            resolve();
        });
    })

}

function getAllPlanets() {
    return habitablePlanets;
}
function getPlanetById(planetId) {
    return habitablePlanets.find(planet => planet.kepler_name === planetId);
}


module.exports = {
    getAllPlanets,
    getPlanetById,
    loadHabitablePlanets,
    isHabitablePlanet
}