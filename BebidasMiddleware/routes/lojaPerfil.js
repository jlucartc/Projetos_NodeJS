var express = require('express');
var router = express.Router();

var Lojas = require('./../models/main.js');

var loja = new Lojas();

var listaLojas = null;

loja.find(function(err,lojas){
  if(err) throw err;
  listaLojas = lojas;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lojaPerfil', { title: 'Express' , lojas : listaLojas});
});

module.exports = router;
