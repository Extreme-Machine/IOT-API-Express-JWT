const {VehicleData, validate} = require('../models/vehicledata');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    res.send('Vehicle Data Test endpoint');
});

router.post('/', async (req,res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let vehicleData = await VehicleData.findOne({ vehicleNumber : req.body.vehicleNumber });
    if(vehicleData) return res.status(400).send('Vehicle already exists.');
    
    vehicleData = new VehicleData({
       vehicleName: req.body.vehicleName,
       vehicleNumber: req.body.vehicleNumber,
       vehicleType: req.body.vehicleType,
       API_KEY: ""
    });
    
    await vehicleData.save();
    const token = vehicleData.generateAuthToken();
    vehicleData = await VehicleData.findOneAndUpdate({vehicleNumber: req.body.vehicleNumber}, { API_KEY: token}, () => {});
    
    res.send(vehicleData);
});

module.exports = router;