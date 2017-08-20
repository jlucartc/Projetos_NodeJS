var express = require('express');
var router = express.Router({mergeParams : true});

var Loja = require('../models/Loja.js');
var Produto = require('../models/Produto.js');

var Regex = require('regex');



/* GET home page. */
router.post('/', function(req, res, next) {

    var lojas = new Array();
    var produtos = new Array();

    var semespaco = req.body.string.split(' ');
    var semvirgula = req.body.string.split(',');

    var arr = semvirgula.concat(semespaco);


    arr = arr.filter(function(el,pos){
      return arr.indexOf(el) == pos;
    });

    console.log(arr);

    var rLojas;
    var rProdutos;

    Loja.find(function(err,r){
      if(err) throw err;
      rLojas = r;
      Produto.find(function(err,r){
        if(err) throw err;
        rProdutos = r;
        for(var i = 0; i < arr.length; i++){
          var reg = new RegExp("\s?"+arr[i]+"*",'g');
          for(var j = 0; j < rLojas.length; j++){
            if(reg.test(rLojas[j].nome)){
              lojas.push(rLojas[j]);
            }
          }
          for(var k = 0; k < rProdutos.length; k++){
            if(reg.test(rProdutos[k].nome || reg.test(rProdutos[k].marca))){
              produtos.push(rProdutos[k]);
            }
          }
        }

        var json = new Object();

        json.lojas = lojas;
        json.produtos = produtos;

        res.json(json);

      });
    });

});

module.exports = router;
