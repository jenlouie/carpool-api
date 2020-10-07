const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Trip = require('./app/models/trip');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routes here
require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('trips-api is live on ' + port);
});