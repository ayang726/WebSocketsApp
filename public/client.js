// const server1 = '127.0.0.1:3000'
// const server2 = '127.0.0.2:3000'

const server = '10.0.0.195:3000'

var socket = io.connect(server)
// var socket2 = io.connect(server2)
socket.on('connect', function(data){
	console.log("I'm connected")

})
// socket2.on('connect', function(data){
// 	console.log("I'm connected")

// })

document.getElementById('button1').addEventListener('click', function() {
	socket.emit('buttonPressed', "orange",function(){
		console.log('msg sent')
	})
})
document.getElementById('button2').addEventListener('click', function(){
	socket.emit('buttonPressed', "lightyellow",function(){
		console.log('msg sent')
	})
})

socket.on('changeColor', function(data) {
	document.body.style.background = data
})

socket.on("updateLEDStatus", function(data) {
	console.log("Updating LED status");
	if (data == true) {
		document.body.style.background = "blue"
	} else {
		document.body.style.background = "gray"
	}
})