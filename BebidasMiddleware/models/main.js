var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lojaSchema = new Schema({
  nome : String,
  empresa_id : Schema.ObjectID,
  end : {
    bairro : String,
    cep : String,
    rua : String,
    numero : Number,
    predio : String,
    apartamento : String

  },
  produtos : [{ id : Schema.ObjectID }]
});

var produtoSchema = new Schema({
  nome : String,
  marca : String,
  volume : { vLitro : Number, vmL : Number}
});

var mapaSchema = new Schema();

var pedidoSchema = new Schema({
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
  }
  listaProdutos : [{ id : Schema.ObjectID , quantidade : Number, valor : Number}]
  valor : Number
});

var lojaModel = mongoose.model('Lojas', lojaSchema);
var produtoModel = mongoose.model('Produtos', produtoSchema);
var pedidoModel = mongoose.model('Pedidos', pedidoSchema);

exports.Loja = lojaModel;
exports.Produto = produtoModel;
exports.Pedido = pedidoModel;
