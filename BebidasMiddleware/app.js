var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var index = require('./routes/index');
var iMarca = require('./routes/iMarca');
var iProduto = require('./routes/iProduto');
var iPedido = require('./routes/iPedido');
var iLoja = require('./routes/iLoja');
var gMarca = require('./routes/gMarca');
var gProduto = require('./routes/gProduto');
var gPedido = require('./routes/gPedido');
var gLoja = require('./routes/gLoja');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/iMarca', iMarca);
app.use('/iProduto',iProduto);
app.use('/iPedido',iPedido);
app.use('/iLoja',iLoja);
app.use('/gMarca', gMarca);
app.use('/gProduto',gProduto);
app.use('/gPedido',gPedido);
app.use('/gLoja',gLoja);
app.post('/addMarca',function(req,res,next){
  var body = req.body;
  var Marca = require('./models/Marca.js');
  Marca.create(body,function(err){
    if (err) throw err;
    res.redirect('/users');
  });
});
app.post('/addProduto',function(req,res,next){
  var body = req.body;
  var Produto = require('./models/Produto.js');
  Produto.create(body);
  res.redirect('/');
});
app.post('/addPedido',function(req,res,next){
  var body = req.body;
  var Pedido = require('./models/Pedido.js');
  Pedido.create(body);
  res.redirect('/');
});
app.post('/addLoja',function(req,res,next){
  var body = req.body;
  var Loja = require('./models/Loja.js');
  Loja.create(body);
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
