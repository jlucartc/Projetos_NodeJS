var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var Loja = require('../models/Loja.js');
  Loja.find(function(err,r){
      if(err) throw err;
      res.render('lojas', { title: 'Express', lista : r});
  });
});

module.exports = router;
