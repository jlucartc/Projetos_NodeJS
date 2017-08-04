var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lojasSchema = new Schema({
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

var produtosSchema = new Schema({
  nome : String,
  marca : String,
  volume : { vLitro : Number, vmL : Number}
});

var mapaSchema = new Schema();

var pedidosSchema = new Schema({
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
