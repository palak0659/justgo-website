const mongoose = require('mongoose');

var Flight = mongoose.model('Flight', {
    From: { type: String },
    Destination: { type: String },
    FlightOf: { type: String },
    Price: { type: String },
    Duration: { type: String },
    DepartureTime: { type: String }
    
});

module.exports = { Flight };