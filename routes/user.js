/*
Users' Router
This router contains all endpoints for the User entit
*/
var express = require('express');
var router = express.Router();

var userCtrl  = require('../controllers/userController');

router.get('/', userCtrl.getAll);

router.get('/:id', userCtrl.getById);

router.post('/', userCtrl.create);

router.put('/:id', userCtrl.update);

router.delete('/:id', userCtrl.remove);

module.exports = router;
