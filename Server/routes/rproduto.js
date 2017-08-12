var express = require('express');
var router = express.Router({mergeParams : true});

/* GET home page. */
router.get('/', function(req, res, next) {
  var ObjectId  = require('mongodb').ObjectId;
  var Produto = require('../models/Produto.js');
  Produto.remove({'_id' : ObjectId(req.params.id)},function(err){
    if(err) throw err;
    res.redirect('/produtos');
  });
});

module.exports = router;
