##Express TwinRouter

Route both ajax as well as websocket request.


##Installation:

```javascript
npm install twinrouter

```

##Usage:

let us consider a express example which uses socket.io.


```javascript

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

app.use("/", Router.router);

server.listen(3000, function(){
	console.log("listen to port 3000");
});

```

##LICENSE
MIT
