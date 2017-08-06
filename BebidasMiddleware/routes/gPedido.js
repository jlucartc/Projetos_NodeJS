var express = require('express');
var router = express.Router();
var Marca = require('./../models/Marca.js');

var listaMarcas = null;

Marca.find(function(err,results){
  if(!results){
    listaMarcas = "{}";
  }else{
    listaMarcas = results;
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gPedido', { title: 'Express' });
});

module.exports = router;
