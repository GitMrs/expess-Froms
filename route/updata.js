const express = require("express"),
	  route = express.Router()
	 const connection = require("../config/connect")()
	  route.post("/updata",function(req,res){
	  	const name = req.body.name
	  	const pwd = req.body.pwd
	  	const id = req.body.id
	  	console.log(id)
	  	connection.query("update eee set name=?,pwd=? where id=?",[name,pwd,id],function(err,result){
	  		res.send({code:1})
	  	})
	  })
	  module.exports=route
