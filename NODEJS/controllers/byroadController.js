const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Byroad } = require('../models/byroad');


router.get('/', (req, res) => {
    Byroad.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Byroad :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Byroad.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  Byroad :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var road = new Byroad({
        From: req.body.From,
        Destination: req.body. Destination,
        CarInformation: req.body. CarInformation,
        Price: req.body.Price,
        DepartureTime: req.body.DepartureTime,
        Duration: req.body.Duration
    });
    road.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var road = {
        From: req.body.From,
        Destination: req.body. Destination,
        CarInformation: req.body. CarInformation,
        Price: req.body.Price,
        DepartureTime: req.body.DepartureTime,
        Duration: req.body.Duration
    };
    Byroad.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Byroad Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Byroad.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Byroad Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;