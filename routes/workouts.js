const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({message: 'GET single workout'})
})

router.post('/', (req, res) => {
    res.json({message: 'POST a workout'})
})

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE single workout'})
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE single workout'})
})

module.exports = router;