const Mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const vehicleDataScheme = new Mongoose.Schema({
    vehicleName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    vehicleNumber: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
        unique: true
    },
    vehicleType: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    API_KEY: {
        type: String,
        required: true,
        maxlength: 1024
    }
});

//Method to generate token

//Create a class
const VehicelData = Mongoose.model('VehicleData', vehicleDataScheme);

function validateVehicleData(vehicleData) {
    const schema = {
        vehicelName: Joi.string().min(3).max(50).required(),
        vehicelNumber: Joi.string().min(5).max(20).required(),
        vehicelType: Joi.string().min(3).max(50).required(),
    };
    return Joi.validate(vehicleData, schema);
}

exports.VehicelData = VehicelData;
exports.validate = validateVehicleData;
