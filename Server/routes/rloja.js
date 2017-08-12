var express = require('express');
var router = express.Router({mergeParams : true});

/* GET home page. */
router.get('/', function(req, res, next){
  var Loja = require('../models/Loja.js');
  var ObjectId = require('mongodb').ObjectId;
  Loja.remove({'_id' : ObjectId(req.params.id)},function(err,r){
    if(err) throw err;
    console.log('remove : '+r);
    res.redirect('/lojas');
  })
});

module.exports = router;
