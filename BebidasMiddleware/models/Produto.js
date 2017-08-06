var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./../db/db.js');

var Produto = Schema({
  nome : String,
  marca : String,
  volume : { vLitro : Number, vmL : Number}
});

module.exports = db.model('Produto',Produto);
