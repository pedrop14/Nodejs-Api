function EventosController(){

}

EventosController.prototype.getAll = function(req,res,next){
  res.send('Get all events');
};

EventosController.prototype.getById = function(req,res,next){
  res.send('Get a event by id');
};

EventosController.prototype.create = function(req,res,next){
  res.send('Create a event');
};

EventosController.prototype.update = function(req,res,next){
  res.send('Update a event');
};

EventosController.prototype.remove = function(req,res,next){
  res.send('Remove a event');
};

module.exports = new EventosController();
