var express = require('express');
var router = express.Router();
var Loja = require('./../models/Loja.js');

var listaLojas = null;

Loja.find(function(err,results){
  if(!results){
    listaLojas = "{}";
  }else{
    listaLojas = results;
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gLoja', { title: 'gLoja', lojas : listaLojas});
});

module.exports = router;
