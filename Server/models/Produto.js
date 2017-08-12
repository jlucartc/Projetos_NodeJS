var Schema = require('mongoose').Schema;
var db = require('../database/db.js');

var Produto = Schema({
  nome : String,
  marca : String,
  volume : { unidade : String, valor : Number} 
},{versionKey : false});

module.exports = db.model('Produto',Produto);
