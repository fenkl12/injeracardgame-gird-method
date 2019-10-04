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
      if (injeraCardDeck1filtered.length <= 0){
          document.getElementById("deck-1").src = "blank.png"
          document.getElementById("deck-1").onclick = " "
  
      }

  } )