const plants = require("../../models/planets.model");


function getAllPlanets(req, res) {
   return res.status(200).json(plants);
}


module.exports = {
    getAllPlanets,
}