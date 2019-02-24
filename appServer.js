const express = require('express');
var app = express()
const socket = require('socket.io')

const hostname = '10.0.0.195'
const port = 3000

var server = app.listen(port,hostname, console.log('Listening at ' + hostname + ' on port ' + port))
app.use(express.static('public'))

io = socket(server)



io.on('connection', function(socket) {
	console.log(socket.id + ' connected')
	socket.on('disconnect', function(data){
		console.log(socket.id + ' disconnected')
	})
	io.emit("Webcome " + socket.id + " to WebSocket")

	socket.on('message', function(data) {
		console.log('message received')
		console.log(data)
	})
	socket.on('IOData', function(data){
		console.log('Data Received')
		console.log(data)
	})

})



