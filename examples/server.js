var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Router = require('../index.js');


Router = Router(io);

Router.builder.get('/', function(req, res){
	console.log("hello");
	res.send("hello");
});

app.use("/users", Router.router);

server.listen(3000, function(){
	console.log("listen to port 3000");
});
