const express = require('express');
var app = express()
const socket = require('socket.io')

const hostname = '127.0.0.2'
const port = 8080

var server = app.listen(port,hostname, console.log('Listening at ' + hostname + ' on port ' + port))
app.use(express.static('public'))

io = socket(server)

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

