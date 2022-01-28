const mongoose = require('mongoose');

var Train = mongoose.model('Train', {
    From: { type: String },
    Destination: { type: String },
    TrainInformation: { type: String },
    Price: { type: String },
    Duration: { type: String },
    DepartureTime: { type: String }
    
});

module.exports = { Train };