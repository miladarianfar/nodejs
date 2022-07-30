require('dotenv').config()
const express = require('express')

const workoutRoutes = require('./routes/workouts')

const app = express()

app.use('/api/workouts', workoutRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.listen(process.env.PORT, () => {
    console.log('app runing in port 4000');
})