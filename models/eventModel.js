function UserModel(mysql){
  this.db = mysql;
}

UserModel.prototype.find = function(query, callback){
  this.db.query()
};

UserModel.prototype.create = function(data, callback){
};

UserModel.prototype.update = function(_id, data, callback){
};

UserModel.prototype.remove = function(_id, callback){
};

module.exports = new UserModel();
