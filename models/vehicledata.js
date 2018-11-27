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
        maxlength: 1024
    }
});

//Method to generate token
vehicleDataScheme.methods.generateAuthToken = function() {
    const token = jwt.sign({_id : this._id, vehicleName: this.vehicleName, vehicleNumber: this.vehicleNumber }, config.get('SECRET_KEY'));
    return token;
}

vehicleDataScheme.methods.generateAuthTokenTest = function() {
    const token = jwt.sign({vehicleName: this.vehicleName, vehicleNumber: this.vehicleNumber }, config.get('SECRET_KEY'));
    return token;
}

//Create a class
const VehicelData = Mongoose.model('VehicleData', vehicleDataScheme);

function validateVehicleData(vehicleData) {
    const schema = {
        vehicleName: Joi.string().min(3).max(50).required(),
        vehicleNumber: Joi.string().min(5).max(20).required(),
        vehicleType: Joi.string().min(3).max(50).required(),
    };
    return Joi.validate(vehicleData, schema);
}

exports.VehicleData = VehicelData;
exports.validate = validateVehicleData;
