var express = require('express');
var router = express.Router();
var Produto = require('./../models/Produto.js');

var listaProdutos = null;

Produto.find(function(err,results){
  if(!results){
    listaProdutos = "{}";
  }else{
    listaProdutos = results;
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gProduto', {title: 'Express', lista : listaProdutos});
});

module.exports = router;
