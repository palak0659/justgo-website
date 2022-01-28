const mongoose = require('mongoose');

var Byroad = mongoose.model('Byroad', {
    From: { type: String },
    Destination: { type: String },
    CarInformation: { type: String },
    Price: { type: String },
    Duration: { type: String },
    DepartureTime: { type: String }
    
});

module.exports = { Byroad };