var socket = io()

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
      // console.log(id);
      
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
      // console.log({injeraCardDeck1filtered: injeraCardDeck1filtered,
      //       injeraCardDeck2filtered: injeraCardDeck2filtered,
      //       injeraCardDeck3filtered: injeraCardDeck3filtered,
      //       injeraCardDeck4filtered: injeraCardDeck4filtered,
      //       injeraCardDeck5filtered: injeraCardDeck5filtered,
      //       injeraCardDeck6filtered: injeraCardDeck6filtered});
      unifiedCardDeck.push(data)  
      // console.log(data);
//     socket.emit('deck1Click', {data: data});
   
})


socket.on('deck1Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      var Deck1PickedCard = unifiedCardDeck[0].injeraCardDeck1filtered.pop()
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      if (unifiedCardDeck[0].injeraCardDeck1filtered.length <= 0){
          document.getElementById("deck-1").src = "imgs/blank.png"
          document.getElementById("deck-1").onclick = " "
  
      }
      socket.emit('myClick', {event: Deck1PickedCard, id:data.id});
   
})

socket.on('deck2Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      var Deck2PickedCard = unifiedCardDeck[0].injeraCardDeck2filtered.pop()
      // console.log(unifiedCardDeck[0].injeraCardDeck2filtered);
      if (unifiedCardDeck[0].injeraCardDeck2filtered.length <= 0){
            document.getElementById("deck-2").src = "imgs/blank.png"
            document.getElementById("deck-2").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck2PickedCard, id:data.id});
   
})

socket.on('deck3Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      var Deck3PickedCard = unifiedCardDeck[0].injeraCardDeck3filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck3filtered.length <= 0){
            document.getElementById("deck-3").src = "imgs/blank.png"
            document.getElementById("deck-3").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck3PickedCard, id:data.id});
   
})


socket.on('deck4Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      var Deck4PickedCard = unifiedCardDeck[0].injeraCardDeck4filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck4filtered.length <= 0){
            document.getElementById("deck-4").src = "imgs/blank.png"
            document.getElementById("deck-4").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck4PickedCard, id:data.id});
   
})


socket.on('deck4Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      var Deck4PickedCard = unifiedCardDeck[0].injeraCardDeck4filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck4filtered.length <= 0){
            document.getElementById("deck-4").src = "imgs/blank.png"
            document.getElementById("deck-4").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck4PickedCard, id:data.id});
   
})


socket.on('deck5Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      var Deck5PickedCard = unifiedCardDeck[0].injeraCardDeck5filtered.pop()
      if (unifiedCardDeck[0].injeraCardDeck5filtered.length <= 0){
            document.getElementById("deck-5").src = "imgs/blank.png"
            document.getElementById("deck-5").onclick = " "
    
        }
      socket.emit('myClick', {event: Deck5PickedCard, id:data.id});
   
})

socket.on('deck6Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
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