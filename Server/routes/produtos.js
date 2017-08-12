var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var Produto = require('../models/Produto.js');
  Produto.find(function(err,r){
    if(err) throw err;
    res.render('produtos', { title: 'Express', lista: r });
  });
});

module.exports = router;
