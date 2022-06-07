const express = require('express');

const app = express();
const personRouter = require('./routes/person.router')

app.get('/',(req,res)=>{
    res.status(404).json({
        status: "Success"
    })
})

app.use('/api/v1/person', personRouter)



module.exports = app;