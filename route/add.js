const express = require("express"),
	  route = express.Router()
const querystring = require("querystring");
const connection = require("../config/connect.js")();
	route.get("/add",function(req,res){
			const user = req.url.split("=")[0]
			const name = querystring.parse(req.url)[user]
			const pwd = querystring.parse(req.url).pwd
			connection.query("insert into eee(name,pwd) values(?,?)",[name,pwd],function(err,result){
				res.send({code:1})
			})
	})
module.exports = route
