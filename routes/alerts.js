const {AlertData} = require('../models/alertdata');
const authorise = require('../middleware/authorise');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    res.send('Alert Data Test endpoint');
});

router.post('/', authorise, async (req,res) => {
    //console.log(req.decoded);
    let alertData = new AlertData({
        vehicleName: req.decoded.vehicleName,
        vehicleNumber: req.decoded.vehicleNumber,
        alertType: req.body.alertType
     });
     
    await alertData.save();
    res.status(200).send("Alert Received");
});

module.exports = router;