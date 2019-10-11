var socket = io()

socket.on('err', (data) =>{
      alert(data.message)
      console.log(data.message);
      
})


socket.on('connect', () =>{
      console.log("Connected to server");


      
      
})

socket.on('disconnect', () =>{
      console.log("Disconnected from server");
})

socket.on('userLimit', () =>{
      console.log("Disconnected from server");
})


socket.on('myClick', function (data) {

      var id = socket.io.engine.id 
      // console.log(id);
      
      // console.log(data);
      checkAndMovetoPiles(data)
      console.log(data-1);
      // if (injeraCardDeck1filtered.length <= 0){
      //     document.getElementById("deck-1").src = "imgs/blank.png"
      //     document.getElementById("deck-1").onclick = " "
  
      // }
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
      socket.emit('myClick', {event: Deck1PickedCard, id:data.id});
   
})

socket.on('deck2Click', (data) =>{
      // console.log(unifiedCardDeck[0].injeraCardDeck1filtered);
      var Deck2PickedCard = unifiedCardDeck[0].injeraCardDeck2filtered.pop()
      socket.emit('myClick', {event: Deck2PickedCard, id:data.id});
   
})