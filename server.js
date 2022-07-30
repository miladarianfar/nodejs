require('dotenv').config()
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the test application'});
})

app.listen(process.env.PORT, () => {
    console.log('app runing in port 4000');
})