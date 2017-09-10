var express = require("express"),
	route = express.Router()
	route.post("/resigted",(req,res)=>{
	const name = req.body.name,
		  pwd = req.body.pwd;
	const connection = require("../config/connect")()
		 connection.query("select name from eee where name=?",[name],(err,result)=>{
			if(result.length==0){
				connection.query("insert into eee(name,pwd) values(?,?)",[name,pwd],(err,result)=>{
					res.send({code:1,msg:"success"})
				})
			}else{
				res.send({code:0,msg:"fail"})
			}
	})
})
module.exports = route;