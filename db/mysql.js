var mysql = require('mysql');
var config = require('config');

use 'strict';

var connMySQL = function(){
	console.log('Conexao com bd foi estabelecida');
	return mysql.createConnection({
		host : config.get('mysql.host'),
		user : config.get('mysql.user'),
		password : config.get('mysql.password'),
		database : config.get('mysql.database')
	});
}

module.exports = function (){
	console.log('O autoload carregou o módulo de conexão com bd');
	return connMySQL;
}
