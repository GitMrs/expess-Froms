module.exports = function(){
	const mysql = require("mysql")
	const connection=mysql.createConnection({
		host:"localhost",
		port:3306,
		user:"root",
		password:"1314",
		database:"first",
		insecureAuth:true
	})
	connection.connect()
	return connection
}