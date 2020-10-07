// routes/index.js

const trips = require('./trips');

module.exports = function(app, db) {
    trips(app, db);
};