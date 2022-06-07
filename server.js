require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDb = require('./db/connect');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000; 
const server = http.createServer(app);

async function startServer(){
    await connectDb(process.env.MONGO_URI);

    server.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT}...`)
    })
}
startServer();
mongoose.connection.once('open',()=>{
    console.log("MongoDb connection Successful");
})

mongoose.connection.on('error',(err)=>{
    console.log(err);
})