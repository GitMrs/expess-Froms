const express = require("express"),
	  route = express.Router()
const connection = require("../config/connect.js")()
	  route.post("/limit",(req,res)=>{
	  	const start = req.body.start
	  	const length = req.body.length
	  	const num = (start-1)*length
	  	connection.query("select name,pwd from eee limit 0 2",(err,result)=>{
	  		console.log(result)
	  		res.render("/limit",{
//	  			data:result
	  		})
	  	})
	  })
module.exports = route
