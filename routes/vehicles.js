const {VehicleData, validate} = require('../models/vehicledata');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const router = express.Router();


router.post('/', async (req,res) => {
    res.send('hello');
});

module.exports = router;