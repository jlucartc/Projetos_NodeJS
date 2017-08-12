var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var Marca = require('../models/Marca.js');
  Marca.find(function(err,r){
    if(err) throw err;
    res.render('iproduto', { title: 'Express', marcas : r});
  });
});

module.exports = router;
