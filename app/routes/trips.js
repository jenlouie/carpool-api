// routes/trips.js
const {Trip, trips} = require('../models/trip');

const findTrip = (id) => {
    return trips.find(trip => id === trip.id);
  };

module.exports = function(app, db) {

    app.get('/trips', (req, res) => {
        res.json(trips);
    });

    app.get('/trips/:tripId', (req, res) => {
      const trip = findTrip(parseInt(req.params.tripId));
      res.json(trip);
    });

    app.post('/trips', (req, res) => {
      console.log(req.body);
      var newTrip = req.body;
      trips.push(newTrip);
      res.json(newTrip);
    });

    app.put('trips/:tripId', (req, res) => {
        res.json(trips);
    });

    app.delete('trips/:tripId', (req, res) => {
        res.json(trips);
    });
};





