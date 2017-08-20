var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

///

var lojas = require('./routes/lojas');
var marcas = require('./routes/marcas');
var produtos = require('./routes/produtos');
var lojaDetalhes = require('./routes/lojaDetalhes');
var marcaDetalhes = require('./routes/marcaDetalhes');
var produtoDetalhes = require('./routes/produtoDetalhes');
var iloja = require('./routes/iloja');
var imarca = require('./routes/imarca');
var iproduto = require('./routes/iproduto');
var jlojas = require('./routes/jlojas');
var jmarcas = require('./routes/jmarcas');
var jprodutos = require('./routes/jprodutos');
var aloja = require('./routes/aloja');
var amarca = require('./routes/amarca');
var aproduto = require('./routes/aproduto');
var rloja = require('./routes/rloja');
var rmarca = require('./routes/rmarca');
var rproduto = require('./routes/rproduto');
var pesquisar = require('./routes/pesquisar');

var cors = require('cors');

///

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

const corsOptions = { path : 'http://localhost:4200', optionsSuccessStatus: 200 };

app.use(cors(corsOptions));

app.use('/', index);
app.use('/users', users);

///

app.use('/lojas',lojas);
app.use('/marcas',marcas);
app.use('/produtos',produtos);

///

app.use('/loja/i',iloja);
app.use('/marca/i',imarca);
app.use('/produto/i',iproduto);
///

app.use('/loja/:id',lojaDetalhes);
app.use('/marca/:id',marcaDetalhes);
app.use('/produto/:id',produtoDetalhes);

///

app.use('/loja/a',aloja);
app.use('/marca/a',amarca);
app.use('/produto/a',aproduto);

app.use('/loja/r/:id',rloja);
app.use('/marca/r/:id',rmarca);
app.use('/produto/r/:id',rproduto);

///

app.use('/lojas/j',jlojas);
app.use('/marcas/j',jmarcas);
app.use('/produtos/j',jprodutos);

///

app.use('/pesquisar',pesquisar);

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
  console.log(res.locals.message);
  res.render('error');
});

module.exports = app;
