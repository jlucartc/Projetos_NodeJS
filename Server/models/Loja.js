var Schema = require('mongoose').Schema;
var db = require('../database/db.js');

var Loja = Schema({
  nome : String,
  end : {rua : String, numero : Number, cep : String },
  produtos : [{id : String, quantidade : Number, valor : Number}],
  desc : String
},{versionKey : false});

module.exports = db.model('Loja',Loja);
