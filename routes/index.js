var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
  res.status(201);
  res.send("API RestFul");
});

router.use('/user', require('./user'));

module.exports = router;
