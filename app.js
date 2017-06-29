var express = require ('express');
var methodOverride = require('method-override'); //Módulo para o server escutar outros verbos além de GET E POST
var bodyParser = require('body-parser'); //Módulo que faz o parser para o Express entender as requisições

var app = express();

//server config
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//router
app.use('/', require('./routes'));

//error hendling  -- Middleware para tratamento de erro
app.use(function(req,res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err,req, res, next){
  res.status(err.status || 500).json({err:err.message});
});

module.exports = app;
