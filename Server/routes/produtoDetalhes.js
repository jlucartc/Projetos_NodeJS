var express = require('express');
var router = express.Router({mergeParams : true});

/* GET home page. */
router.get('/', function(req, res, next) {
  var ObjectId = require('mongodb').ObjectId;
  var Produto = require('../models/Produto.js');
  if(req.params.id.length >= 12){
  Produto.find({_id : ObjectId(req.params.id) },function(err,r){
    if(err) throw err;
    res.render('produtoDetalhes', { title: 'Express', produto : r});
  });
}else{
  res.send('<h3>Produto inexistente</h3>');
}
});

module.exports = router;
