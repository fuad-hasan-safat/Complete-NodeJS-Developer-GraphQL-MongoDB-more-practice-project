const express = require('express');
const { getAllLaunches } = require('./launches.control');

const launchesRouter = express.Router();

launchesRouter.get('/getlaunches', getAllLaunches);

module.exports = launchesRouter;