var express = require('express');
var router = express.Router();

//rota home
router.get('/',function(req, res){
  res.status(201);
  res.json({'name':'Pedro', 'email':'pedropp'});
});

//rota Eventos
router.use('/eventos', require('./eventos'));

module.exports = router;
