var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./../db/db.js');

var Loja =  Schema({
  nome : String,
  empresa_id : String,
  end : {
    bairro : String,
    cep : String,
    rua : String,
    numero : Number,
    predio : String,
    apartamento : String

  },
  produtos : [{ id : String }]
},{versionKey : false});

module.exports = db.model('Loja',Loja);
