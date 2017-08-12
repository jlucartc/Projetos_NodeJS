var express = require('express');
var router = express.Router({mergeParams : true});

/* GET home page. */
router.get('/', function(req, res, next) {
  var Marca = require('../models/Marca.js');
  var ObjectId = require('mongodb').ObjectId;
  Marca.remove({'_id' : ObjectId(req.params.id) },function(err,r){
    if(err) throw err;
    res.redirect('/marcas');
  });
});

module.exports = router;
