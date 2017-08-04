var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Bebidas');

var db = mongoose.connection;

db.on('error',function(err){
  if(err) throw err;
  console.log("Connection is up!");
})

exports.db = db;
