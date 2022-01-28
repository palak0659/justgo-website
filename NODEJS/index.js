const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var flightController = require('./controllers/flightController.js');
var contactController = require('./controllers/contactController.js');
var byroadController = require('./controllers/byroadController.js');
var trainController = require('./controllers/trainController.js');
var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// app.listen(3000, () => console.log('Server started at port : 3000'));
app.listen(port, () => {
    console.log('Server started at port : ${port}');
})

app.use('/flights', flightController);
app.use('/employees', employeeController);
app.use('/contacts',contactController);
app.use('/byroads', byroadController);
app.use('/trains', trainController);

