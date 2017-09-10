const express = require("express"),
	  app = express(),
	  ejs = require("ejs"),
	  bodyparser = require("body-parser")
//引用静态资源
app.use(express.static(__dirname + "/static"))
//设置中间件
app.use(bodyparser.urlencoded({"extended":false}))
//设置模板资源
app.set("views",__dirname + "/views");
app.set("view engine","ejs");
//引用主资源
require("./config/configfile")(app);
//监听端口
app.listen(8888,()=>{
	console.log("listen 8888")
})