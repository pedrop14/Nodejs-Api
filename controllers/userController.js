function UserController(model){
    this.model = model;
  }
  
  UserController.prototype.getAll = function(req,res,next){
    res.send('Get all events');
  };
  
  UserController.prototype.getById = function(req,res,next){
    res.send('Get a event by id');
  };
  
  UserController.prototype.create = function(req,res,next){
    res.send('Create a event'); 
  };
  
  UserController.prototype.update = function(req,res,next){
    res.send('Update a event');
  };
  
  UserController.prototype.remove = function(req,res,next){
    res.send('Remove a event');
  };
  
  module.exports = new UserController();
  