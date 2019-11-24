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
      // only emit to other clients, if io.emit sending to other user and self again. 
   socket.emit('myClick', data);
      // console.log(data);
     //  io.emit broadcasts to all clients 
     // socket.broadcast.emit will send the message to all the other clients except the newly created connection
 });

 socket.on('deck1Click', function (data) {
  io.emit('deck1Click', data);
  // console.log(data);
 //  io.emit broadcasts to all clients 
 // socket.broadcast.emit will send the message to all the other clients except the newly created connection
}); 
socket.on('deck2Click', function (data) {
  io.emit('deck2Click', data);
  // console.log(data);
 //  io.emit broadcasts to all clients 
 // socket.broadcast.emit will send the message to all the other clients except the newly created connection
}); 
socket.on('deck3Click', function (data) {
  io.emit('deck3Click', data);
  // console.log(data);
 //  io.emit broadcasts to all clients 
 // socket.broadcast.emit will send the message to all the other clients except the newly created connection
}); 
socket.on('deck4Click', function (data) {
  io.emit('deck4Click', data);
  // console.log(data);
 //  io.emit broadcasts to all clients 
 // socket.broadcast.emit will send the message to all the other clients except the newly created connection
}); 
socket.on('deck5Click', function (data) {
  io.emit('deck5Click', data);
  // console.log(data);
 //  io.emit broadcasts to all clients 
 // socket.broadcast.emit will send the message to all the other clients except the newly created connection
}); 
socket.on('deck6Click', function (data) {
  io.emit('deck6Click', data);
  // console.log(data);
 //  io.emit broadcasts to all clients 
 // socket.broadcast.emit will send the message to all the other clients except the newly created connection
}); 
socket.on('playHasReset', function (data) {
      io.emit('playHasReset', data);

    })
    socket.on('dealtCardsArray', function ({injeraCardDeck1filtered: injeraCardDeck1filtered,
      injeraCardDeck2filtered: injeraCardDeck2filtered,
      injeraCardDeck3filtered: injeraCardDeck3filtered,
      injeraCardDeck4filtered: injeraCardDeck4filtered,
      injeraCardDeck5filtered: injeraCardDeck5filtered,
      injeraCardDeck6filtered: injeraCardDeck6filtered}) {
      io.emit('dealtCardsArray', {injeraCardDeck1filtered: injeraCardDeck1filtered,
        injeraCardDeck2filtered: injeraCardDeck2filtered,
        injeraCardDeck3filtered: injeraCardDeck3filtered,
        injeraCardDeck4filtered: injeraCardDeck4filtered,
        injeraCardDeck5filtered: injeraCardDeck5filtered,
        injeraCardDeck6filtered: injeraCardDeck6filtered});
     //  io.emit broadcasts to all clients 
     // socket.broadcast.emit will send the message to all the other clients except the newly created connection
 });

socket.on('yourTurnSocket', function (data) {

  socket.broadcast.emit('yourTurnSocketAcceptance', data);
  //  console.log("socket emitted");
});

socket.on('winnerAccouncment', function (data) {

  io.emit('winnerAccouncment', data);

});

  
}) 
server.listen(port ,()=> {console.log(`Server is up on ${port}`)})