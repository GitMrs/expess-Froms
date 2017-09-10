var express = require("express"),
	route = express.Router()
	route.get("/login",(req,res)=>{
		res.render("login")
	})
module.exports = route;