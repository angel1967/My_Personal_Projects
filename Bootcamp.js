// Bootcamp project: Master of Full stack development 
// Alumno: Miguel Angel Castañeda Aguilera
// Fecha: 20 Junio 2022
console.log('My program is working');
// Dev branch added ==================================
const express = require('express')
var app = express()
var mongoose = require('mongoose');
// Router
const router = require('./routes/emp')
app.use('/emp',router)
//Route
app.get('/',function(req,res){
  res.send('hello world')
})
//MongoDB connection
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})
//Server
app.listen(8000,function(){
  console.log('Server is Up')
})