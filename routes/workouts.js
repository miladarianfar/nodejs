const express = require('express');
const { createWorkout, getWorkouts, getWorkout } = require('../controller/workoutController')

const router = express.Router();

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE single workout'})
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE single workout'})
})

module.exports = router;