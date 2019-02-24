const express = require('express');
var app = express()

const hostname = '10.0.0.195'
const port = 3000

var server = app.listen(port,hostname, console.log('Listening at ' + hostname + ' on port ' + port))
app.use(express.static('public'))

var connection = new WebSocket(hostname+':'+port);

io.on('connection', function(socket) {
	console.log(socket.id + ' connected')
	socket.on('disconnect', function(data){
		console.log(socket.id + 'disconnected')
	})
	
	socket.on('buttonPressed', function(color, fn){
		socket.broadcast.emit('changeColor', color)
		console.log("msg sent")
	})

})

