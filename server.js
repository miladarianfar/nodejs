require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')
const userRouter = require('./routes/user')

const app = express()

app.use(express.json());

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRouter);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to database');
        app.listen(process.env.PORT, () => {
            console.log('app runing in port 4000');
        })
    })
    .catch((error) => {console.log(error)})