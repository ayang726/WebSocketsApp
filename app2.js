const express = require('express');
var app = express()
const socket = require('socket.io')

const hostname = '127.0.0.2'
const port = 3000

app.listen(port,hostname,console.log('Listening at ' + hostname + 'on port ' + port))
app.get('/',(req,res)=>res.send('Hello Wolrd! AGAIN...'))