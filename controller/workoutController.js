const Workout = require('../models/wourkoutModel')
const mongoose = require('mongoose')

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

const getWorkout = async (req, res) => {
    const { id } = req.params
    
    try {
        const workout = await Workout.findById(id)
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({error: 'No such workout'})
        }
        if(!workout) {
            res.status(404).json({error: 'No such workout'})
        }
        res.status(200).json(workout);
    } catch(error) {
        res.status(404).json({error: 'No such workout'})
    }
}

const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
  
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'No such workout'})
    }

    const workout = await Worlout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout) {
        res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}