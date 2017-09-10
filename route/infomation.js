const express = require("express"),
	route = express.Router()
	const connection = require("../config/connect")()
	route.get("/infomation",(req,res)=>{
	connection.query("select * from eee",function(err,result){
		res.render("infomation",{
			data:result
		})
	})
})
module.exports = route;