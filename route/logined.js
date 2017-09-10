var express = require("express"),
	route = express.Router()
	route.post("/logined",(req,res)=>{
	const name = req.body.name
	const pwd = req.body.pwd
	const connection = require("../config/connect")()
	connection.query("select name,pwd from eee where name=? and pwd=?",[name,pwd],(err,result)=>{
		if(result.length >0){
			res.send({code:1,msg:"success"})
		}else{
			res.send({code:0,msg:"fail"})
		}
	})
})
module.exports = route;