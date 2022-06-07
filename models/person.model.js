const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
 person_id: {
     type: String,
 },
 firstname:{
     type:String
 },
 lastname: String,
 dateofbirth: Date,
 vocation: {
     type: String,
 },
 address:{
     number:{
         type:Number,
     },
     street:{
         type: String,
     },
     city:{
         type:String
     }
 }
})

module.exports = mongoose.model('Person', personSchema);