var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var Produto = require('../models/Produto.js');
  Produto.find({nome : req.body.nome},function(err,r){
    if(err) throw err;
    if(r.length > 0){
      res.redirect('/');
    }else{
      Produto.create(req.body,function(err,r){
        if(err) throw err;
        res.redirect('/produtos');
      });
    }
  });
});

module.exports = router;
