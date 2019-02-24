// const server1 = '127.0.0.1:3000'
// const server2 = '127.0.0.2:3000'

const server1 = '10.0.0.195:3000'

var socket1 = io.connect(server1)
// var socket2 = io.connect(server2)
socket1.on('connect', function(data){
	console.log("I'm connected")

})
// socket2.on('connect', function(data){
// 	console.log("I'm connected")

// })

document.getElementById('button1').addEventListener('click', function() {
	socket1.emit('buttonPressed', "orange",function(){
		console.log('msg sent')
	})
})
document.getElementById('button2').addEventListener('click', function(){
	socket1.emit('buttonPressed', "lightyellow",function(){
		console.log('msg sent')
	})
})

socket1.on('changeColor', function(data) {
	document.body.style.background = data
})
