const Mongoose = require('mongoose');


const realTimeDataScheme = new Mongoose.Schema({
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
    gps: {
        lat: {
            type: Number,
            required: true,
        },
        long: {
            type: Number,
            required: true,
        }
    },
    speed: {
        type: Number,
        required: true
    },
    acceleration: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    batteryLevel: {
        type: Number,
        required: true,
    },
    fuelLevel: {
        type: Number,
        required: true,
    }
});

//Create a class
const RealTimeData = Mongoose.model('RealTimeData', realTimeDataScheme);

exports.RealTimeData = RealTimeData;

