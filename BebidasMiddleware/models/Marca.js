var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./../db/db.js');


var Marca = Schema({
  nome : String
},{versionKey : false});


module.exports = db.model('Marca',Marca);
