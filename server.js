const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Trip = require('./app/models/trip');

const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes here
require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('carpool-api is live on ' + port);
});