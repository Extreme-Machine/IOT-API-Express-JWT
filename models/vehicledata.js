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




//Vehicle name, no, description/type, API_KEY 