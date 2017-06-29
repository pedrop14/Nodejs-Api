var express = require('express');
var router = express.Router();

var ctrlEventos  = require('../controllers/eventController');

router.get('/', ctrlEventos.getAll);

router.get('/:id', ctrlEventos.getById);

router.post('/', ctrlEventos.create);

router.put('/:id', ctrlEventos.update);

router.delete('/:id', ctrlEventos.remove);

module.exports = router;
