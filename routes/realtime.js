const {RealTimeData} = require('../models/realtimedata');
const authorise = require('../middleware/authorise');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    res.send('Real Time Data Test endpoint');
});

router.post('/', authorise, async (req,res) => {
    //console.log(req.decoded);
    let realTimeData = new RealTimeData({
        vehicleName: req.decoded.vehicleName,
        vehicleNumber: req.decoded.vehicleNumber,
        gps: {
            lat: req.body.gps.lat ,
            long: req.body.gps.long 
        },
        speed: req.body.speed,
        acceleration: req.body.acceleration,
        status: req.body.status,
        temperature: req.body.temperature,
        batteryLevel: req.body.batteryLevel,
        fuelLevel: req.body.fuelLevel
     });
     
    await realTimeData.save();
    res.send(realTimeData);
});

module.exports = router;