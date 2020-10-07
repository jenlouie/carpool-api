// routes/trips.js
const {Trip, trips} = require('../models/trip');

const findTrip = (id) => {
    return trips.find(trip => id === trip.id);
  };

module.exports = function(app, db) {

    app.post('/trips', (req, res) => {
        console.log(req.body);
        var newTrip = req.body;
        trips.push(newTrip);
        res.json(newTrip);
    });

    app.get('/trips', (req, res) => {
        res.json(trips);
    });

    app.put('trips/:tripId', (req, res) => {
        res.json(trips);
    });

    app.delete('trips/:tripId', (req, res) => {
        res.json(trips);
    });
};





