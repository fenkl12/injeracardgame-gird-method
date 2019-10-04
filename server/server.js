const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public/")
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection',(socket) => {
  
    console.log("New user connected");

    ID = socket.id;

    console.log('client id - '+ socket.id);   

    var users = Object.keys(io.engine.clients)
    
    var user1 = users[0]
    var user2 = users[1]


     

        
    var users = Object.keys(io.engine.clients)
    // socket.emit('UserInfo', users);

    // limit user connections  
    var connectionsLimit = 2
    if (io.engine.clientsCount > connectionsLimit) {
      socket.emit('err', { message: 'reached the limit of connections' })
      socket.disconnect()
 
      console.log('Disconnected...')
      return
    }


    socket.on('myClick', function (data) {
      io.emit('myClick', data);
      console.log(data);
     //  io.emit broadcasts to all clients 
     // socket.broadcast.emit will send the message to all the other clients except the newly created connection
 });
  
}) 
server.listen(port ,()=> {console.log(`Server is up on ${port}`)})