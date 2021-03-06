//Required packages
const Express = require('express');
const app = Express();

const Mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');

//Required Routes
const vehicles = require('./routes/vehicles');
const realtime = require('./routes/realtime');
const alerts = require('./routes/alerts');

//JWT Check
if (!config.get('SECRET_KEY')) {
    console.error('FATAL ERROR: APP_PRIVATE_KEY is not defined.');
    process.exit(1);
}

const DB_URL_1 = config.get('DB_URL');
const DB_URL_2 = 'mongodb://localhost/RTVTSv01';

//MongoDB connection
Mongoose.connect(DB_URL_1, { useNewUrlParser: true })
    .then( () => console.log('Connected to database...'))
    .catch(err => console.error('Error in connection', err));

//Express setup
app.use(Express.json());
app.use('/api/vehicles', vehicles);
app.use('/api/realtime', realtime);
app.use('/api/alerts', alerts);

//Check if port is set in environment variable else set it to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));