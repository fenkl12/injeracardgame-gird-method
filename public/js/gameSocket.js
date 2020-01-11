
var socket = io.connect();
socket.emit('create', 'room1');

socket.on('err', (data) =>{
      alert(data.message)
      console.log(data.message);
    
})


socket.on('connect', () =>{
      // console.log("Connected to server");
  
})

socket.on('disconnect', () =>{
      // console.log("Disconnected from server");
})

socket.on('userLimit', () =>{
      // console.log("Disconnected from server");
})


socket.on('myClick', function (data) {

      var id = socket.io.engine.id 
    
      var gamemoves = async () => {

            checkAndMovetoPiles(data)
      }
      gamemoves()


} )

// since io.emit, the alert and reset will be to all users
socket.on('playHasReset', function (data) {
    
    alert(data.reset)
    
    setTimeout(location.reload.bind(location), 1000);

   })

var unifiedCardDeck = []  

socket.on('dealtCardsArray', (data) =>{

      unifiedCardDeck.push(data)  
   
})


socket.on('deck1Click', (data) =>{

      var Deck1PickedCard = unifiedCardDeck[0].injeraCardDeck1filtered.pop()

      if (unifiedCardDeck[0].injeraCardDeck1filtered.length <= 0){
          document.getElementById("deck-1").src = "imgs/blank.png"
          document.getElementById("deck-1").onclick = " "
  
      }
      socket.emit('myClick', {event: Deck1PickedCard, id:data.id});
   
})

socket.on('deck2Click', (data) =>{

      var Deck2PickedCard = unifiedCardDeck[0].injeraCardDeck2filtered.pop()

      if (unifiedCardDeck[0].injeraCardDeck2filtered.length <= 0){
            document.getElementById("deck-2").src = "imgs/blank.png"
            document.getElementById("deck-2").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck2PickedCard, id:data.id});
   
})

socket.on('deck3Click', (data) =>{

      var Deck3PickedCard = unifiedCardDeck[0].injeraCardDeck3filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck3filtered.length <= 0){
            document.getElementById("deck-3").src = "imgs/blank.png"
            document.getElementById("deck-3").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck3PickedCard, id:data.id});

   
})


socket.on('deck4Click', (data) =>{

      var Deck4PickedCard = unifiedCardDeck[0].injeraCardDeck4filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck4filtered.length <= 0){
            document.getElementById("deck-4").src = "imgs/blank.png"
            document.getElementById("deck-4").onclick = " "
            }
      socket.emit('myClick', {event: Deck4PickedCard, id:data.id});

   })



socket.on('deck5Click', (data) =>{

      var Deck5PickedCard = unifiedCardDeck[0].injeraCardDeck5filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck5filtered.length <= 0){
            document.getElementById("deck-5").src = "imgs/blank.png"
            document.getElementById("deck-5").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck5PickedCard, id:data.id});
   
})

socket.on('deck6Click', (data) =>{

      var Deck6PickedCard = unifiedCardDeck[0].injeraCardDeck6filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck6filtered.length <= 0){
            document.getElementById("deck-6").src = "imgs/blank.png"
            document.getElementById("deck-6").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck6PickedCard, id:data.id});
   
})


socket.on('yourTurnSocketAcceptance', (data) =>{
      yourTurn()
      overlayOff()
})

socket.on('winnerAccouncment', (data) =>{
      alert(data.winner)
     
})