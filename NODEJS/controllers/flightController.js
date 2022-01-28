const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Flight } = require('../models/flight');


router.get('/', (req, res) => {
    Flight.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Flights :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Flight.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var fli = new Flight({
        From: req.body.From,
        Destination: req.body. Destination,
        FlightOf: req.body.FlightOf,
        Price: req.body.Price,
        DepartureTime: req.body.DepartureTime,
        Duration: req.body.Duration
    });
    fli.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        From: req.body.From,
        Destination: req.body. Destination,
        FlightOf: req.body.FlightOf,
        Price: req.body.Price,
        DepartureTime: req.body.DepartureTime,
        Duration: req.body.Duration
    };
    Flight.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Flight Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Flight.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Flight Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;