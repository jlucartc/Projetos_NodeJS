var mongoose = require('mongoose');
var db = require('./../db/db.js').db;

var Schema = mongoose.Schema;

var lojaSchema = Schema({
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
});

var produtoSchema = Schema({
  nome : String,
  marca : String,
  volume : { vLitro : Number, vmL : Number}
});

var mapaSchema = Schema();

var pedidoSchema = Schema({
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

var lojaModel = db.model('Loja',lojaSchema);
var produtoModel = db.model('Produto',produtoSchema);
var pedidoModel = db.model('Pedido',pedidoSchema);

exports.Loja = lojaModel;
exports.Produto = produtoModel;
exports.Pedido = pedidoModel;
