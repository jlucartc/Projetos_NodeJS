var express = require('express');
var router = express.Router({mergeParams : true});

/* GET home page. */
router.get('/', function(req, res, next) {
  var ObjectId = require('mongodb').ObjectId;
  var Loja = require('../models/Loja.js');
  if(req.params.id.length >= 12){
  Loja.find({'_id' : ObjectId(req.params.id)},function(err,r){
    if(err) throw err;
    res.render('lojaDetalhes', { title: 'Express', loja: r});
  });
}else{
  res.send('<h3>Loja inexistente</h3>');
}
});

module.exports = router;
