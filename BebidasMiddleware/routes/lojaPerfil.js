var express = require('express');
var router = express.Router();
var loja = require('./../models/main.js').Loja;

var listaLojas = null;

loja.find(function(err,results){
  if(err) throw err;
  listaLojas = results;
  console.log(results);
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lojaPerfil', { title: 'Express' , lojas : listaLojas});
});

module.exports = router;
