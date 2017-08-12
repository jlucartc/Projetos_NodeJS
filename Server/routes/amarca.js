var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var Marca = require('../models/Marca.js');
  Marca.find({'nome' : req.body.nome },function(err,r){
    if(err) throw err;
    if(r.length > 0){
      res.redirect('/');
    }else{
      Marca.create(req.body,function(err,r){
        if(err) throw err;
        res.redirect('/marcas');
      });
    }
  });
});

module.exports = router;
