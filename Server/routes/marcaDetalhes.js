var express = require('express');
var router = express.Router({mergeParams : true});

/* GET home page. */
router.get('/', function(req, res, next) {
  var ObjectId = require('mongodb').ObjectId;
  var Marca = require('../models/Marca.js');
  if(req.params.id.length >= 12){
  Marca.find({_id : ObjectId(req.params.id)},function(err,r){
    if(err) throw err;
    res.render('marcaDetalhes', { title: 'Express', marca: r});
  });
}else{
  res.send('<h3>Marca inexistente</h3>');
}
});

module.exports = router;
