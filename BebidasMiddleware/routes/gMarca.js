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
  //res.render('gMarca', { title: 'Express', lista: listaMarcas });
  res.json(listaMarcas);
});

module.exports = router;
