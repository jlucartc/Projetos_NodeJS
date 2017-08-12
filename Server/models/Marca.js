var Schema = require('mongoose').Schema;
var db = require('../database/db.js');

var Marca = Schema({
  nome : String
},{versionKey : false});

module.exports = db.model('Marca',Marca);
