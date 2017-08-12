var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var Loja = require('../models/Loja.js');
  var results;
  Loja.find({nome : req.body.nome},function(err,r){
    if(err) throw err;
    if(r.length > 0){
      res.redirect('/');
    }else{
      Loja.create(req.body,function(err,r){
        if(err) throw err;
        console.log(req.body);
        res.redirect('/lojas');
      });
    }
  });
});

module.exports = router;
