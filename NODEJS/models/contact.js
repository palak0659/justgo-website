const mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    Name: { type: String },
    Email: { type: String },
    Message: { type: String }
});

module.exports = { Contact };