var app = require('../app');

var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server running on port %s',port);
});
