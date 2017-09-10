var express = require("express"),
	route = express.Router()
	route.get("/resigter",(req,res)=>{
	res.render("resigter")
})
module.exports = route;