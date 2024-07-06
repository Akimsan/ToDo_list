const express = require('express');
const Task = require('../models/models');
const router = express.Router();

// GET route
router.get('/', async (req, res) => {
    try {
        const docs = await Task.find();
        res.json(docs);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

// POST route
router.post('/', async (req, res) => {
    const task = new Task(req.body);
    try {
        const doc = await task.save();
        res.json(doc);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

// PUT route
router.put('/:id', async (req, res) => {
    try {
        const doc = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json(doc);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

// DELETE route
router.delete('/:id', async (req, res) => {
    try {
        const doc = await Task.findByIdAndDelete(req.params.id);
        res.json(doc);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;
