var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iPedido', { title: 'Express' , n : 1});
});

module.exports = router;
