const express = require('express');
const Workout = require('../models/wourkoutModel')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({message: 'GET single workout'})
})

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
  
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE single workout'})
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE single workout'})
})

module.exports = router;