const express = require("express"),
	route = express.Router()
	const connection = require("../config/connect")()
	route.post("/delete",(req,res)=>{
		const id = req.body.id
	connection.query("delete from eee where id="+id,function(err,result){
		res.send({code:1})
	})
})
module.exports = route;