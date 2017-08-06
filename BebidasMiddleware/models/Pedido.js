var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./../db/db.js');

var Pedido = Schema({
  codigo : String,
  nome : String,
  modoEntrega : Boolean,
  data : Date,
  telefone : String,
  email : String,
  end : {
    cep : Number,
    numero : Number,
    bloco : String,
    apartamento : String
  },
  listaProdutos : [{ id : String , quantidade : Number, valor : Number}],
  valor : Number
});

module.exports = db.model('Pedido',Pedido);
