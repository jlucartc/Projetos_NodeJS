var express = require('express');
var router = express.Router();
var Pedido = require('./../models/Pedido.js');

var listaPedidos = null;

Pedido.find(function(err,results){
  if(!results){
    listaPedidos = "{}";
  }else{
    listaPedidos = results;
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('gPedido', { title: 'Express', lista : listaPedidos});
  res.json(listaPedidos);
});

module.exports = router;
