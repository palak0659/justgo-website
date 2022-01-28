const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Train } = require('../models/train');


router.get('/', (req, res) => {
    Train.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Trains :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

   Train.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  Train :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var tr = new Train({
        From: req.body.From,
        Destination: req.body. Destination,
        TrainInformation: req.body.TrainInformation,
        Price: req.body.Price,
        DepartureTime: req.body.DepartureTime,
        Duration: req.body.Duration
    });
    tr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Train Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        From: req.body.From,
        Destination: req.body. Destination,
        TrainInformation: req.body.TrainInformation,
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