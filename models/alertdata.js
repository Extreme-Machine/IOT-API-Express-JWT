const Mongoose = require('mongoose');


const alertDataScheme = new Mongoose.Schema({
    date: {
        type: Date, 
        default: Date.now
    },
    vehicleName: {
        type: String,
        default: " "
    },
    vehicleNumber: {
        type: String,
        default: " "
    },
    alertType: {
        type: String,
        required: true
    }
});

//Create a class
const AlertData = Mongoose.model('AlertData', alertDataScheme);

exports.AlertData = AlertData;

