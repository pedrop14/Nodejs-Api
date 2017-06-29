function EventModel(mysql){
  this.db = mysql;
}

EventModel.prototype.find = function(query, callback){
  this.db.query()
};

EventModel.prototype.create = function(data, callback){
};

EventModel.prototype.update = function(_id, data, callback){
};

EventModel.prototype.remove = function(_id, callback){
};

module.exports = new EventModel();
