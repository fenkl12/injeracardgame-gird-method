// var socket = io()
class User{
  
  constructor(){
    this.userName()
    // this.mycards()
    this.userCards = [];
    this.length = 0; 
    
  }
  
  userName(){
    // var id = socket.io.engine.id 
    // return id

  }


  // mycards(cards){
  //   var mycardsArray = []
  //   mycardsArray.push.apply(mycardsArray,cards)
  //   return mycardsArray
  // }

  push(cards) { 
 
    this.userCards[this.length] = cards; 
   
    this.length++; 
    return this.userCards

} 
}



class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }
  
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
  
    deal(){
      return this.deck.pop();
    }
    play(){
// may put all data into the play function 

      
    }
  }
 

function dealCards() {
  console.log("dealCards clicked");
const deck1 = new Deck();



// const player1 = new User();
// const player2 = new User();
//   console.log(deck1.deck);
//   deck1.reset();
  
//   console.log(deck1.deck);
var injeraCardDeck1 = []
var injeraCardDeck2 = []
var injeraCardDeck3 = []
var injeraCardDeck4 = []
var injeraCardDeck5 = []
var injeraCardDeck6 = []


// view full deck
// console.log(deck1.deck);
for ( var i = 0; i < deck1.deck.length;){

    // console.log(i);
    injeraCardDeck1.push(deck1.deal())
    injeraCardDeck2.push(deck1.deal())
    injeraCardDeck3.push(deck1.deal())
    injeraCardDeck4.push(deck1.deal())
    injeraCardDeck5.push(deck1.deal())
    injeraCardDeck6.push(deck1.deal())


  }
var injeraCardDeck1filtered = injeraCardDeck1.filter(n => n)
var injeraCardDeck2filtered = injeraCardDeck2.filter(n => n)
var injeraCardDeck3filtered = injeraCardDeck3.filter(n => n)
var injeraCardDeck4filtered = injeraCardDeck4.filter(n => n)
var injeraCardDeck5filtered = injeraCardDeck5.filter(n => n)
var injeraCardDeck6filtered = injeraCardDeck6.filter(n => n)

// emit the dealt cards to all users 
socket.emit('dealtCardsArray', {injeraCardDeck1filtered: injeraCardDeck1filtered,
                                injeraCardDeck2filtered: injeraCardDeck2filtered,
                                injeraCardDeck3filtered: injeraCardDeck3filtered,
                                injeraCardDeck4filtered: injeraCardDeck4filtered,
                                injeraCardDeck5filtered: injeraCardDeck5filtered,
                                injeraCardDeck6filtered: injeraCardDeck6filtered});


    
}





function resetGame(){
    location.reload()
 
}

var nonMatchPile = []
var matchedCards = []

// make sure to move out of function or everything will reset 
const user1 = new User();
const user2 = new User();

function checkAndMovetoPiles(DeckXPickedCardObject) {
 
  var playerId =  (DeckXPickedCardObject[Object.keys(DeckXPickedCardObject)[1]]);
  // console.log(playerId);
  //  console.log("matchedCards = ", matchedCards);
  //  console.log("nonMatchPile = ", nonMatchPile);

  

  // get first value pair and get stiring of value 
  var DeckXPickedCard =  (DeckXPickedCardObject[Object.keys(DeckXPickedCardObject)[0]]);
  console.log(DeckXPickedCard);

  var valueToCheck = DeckXPickedCard.split(" ")[0]
    // console.log("Card to check is",valueToCheck);

  var name = async () => {
    
    for (var i = 0; i < nonMatchPile.length; i++){

      // console.log("Check for match between ",nonMatchPile[i][0],valueToCheck[0] );
      
       if ((nonMatchPile[i][0]) == valueToCheck[0] ){
        
        
        // console.log("We have a match")
        matchedCards.push(nonMatchPile[i],DeckXPickedCard)
        // console.log(matchedCards);
        
        // console.log(nonMatchPile[i],DeckXPickedCard);
        

        // console.log("The Values of i is ",i);
        
        return i
       }
    }

    

    nonMatchPile.push(DeckXPickedCard)
    }
    
    name()
    .then(function (i){

      // match and remove item
      var index = nonMatchPile.indexOf(nonMatchPile[i]);
          if(index != -1) {
            nonMatchPile.splice(index, 1);
            }
     
        // console.log("i is ",i);
      })
    .then(function(){
      // console.log("Matched Cards = ",matchedCards);
      // console.log("Pile = ",nonMatchPile);  

      // remove all elements from the cards middle pile div
      // This was done becasuse when running throught for loop, the count would add to the already displayed cards
      var cardsMiddlePileDiv = document.getElementById('middle-pile')
      while (cardsMiddlePileDiv.firstChild) {
        cardsMiddlePileDiv.removeChild(cardsMiddlePileDiv.firstChild);
        }

      // display cards in the middle by appending child element to cards middle pile div
      for (var i = 0; i < nonMatchPile.length; i++){
      //  console.log(nonMatchPile[i]);
       const createCardsMiddlePileDiv = document.createElement('div')
       createCardsMiddlePileDiv.className = "middle-pile-cards"
       createCardsMiddlePileDiv.innerHTML = `<img src="imgs/PNG/${nonMatchPile[i]}.png" alt="Trulli"></img>`;
       document.getElementById('middle-pile').appendChild(createCardsMiddlePileDiv);
      }



    })
    .then (function(){
      
      
      var id = socket.io.engine.id 
      if (id == playerId ){


      // if matched cards is not empty push to user 1
        if (matchedCards.length !== 0 ){
          user1.push(matchedCards)
        }
        
        // console.log(id);
        // console.log(playerId);
              // move matched card to user 1 pile 
      
 
      // remove all elements from the user1 pile div
     // This was done becasuse when running throught for loop,
     //  the count would add to the already displayed cards
     var user1PileDiv = document.getElementById('user1-pile')
     while (user1PileDiv.firstChild) {
       user1PileDiv.removeChild(user1PileDiv.firstChild);
       }

     
     // diplay user1 cards 
     // console.log("User 1 number of cards",user1.mycards(matchedCards).length);
     for (var i = 0; i < user1.userCards.length; i++){
      for (var b = 0; b < user1.userCards[i].length; b++){
     var cardCount  = user1.userCards.length
     // double because cards pairs are list as 1 
      document.getElementById('user1-card-count').innerText = ("You Have "+ cardCount*2 + " Cards")

     const createUser1PileDiv = document.createElement('div')
     createUser1PileDiv.className = "user-1-pile"
     createUser1PileDiv.innerHTML = `<img src="imgs/PNG/${user1.userCards[i][b]}.png" alt="Trulli"></img>`;
     document.getElementById('user1-pile').appendChild(createUser1PileDiv);
    

     }
      }
     
      }

      else {


      if (matchedCards.length !== 0 ){
          user2.push(matchedCards)
        }
              
        
        // console.log(user2.userName());
        // console.log(playerId);
        console.log("Other Player picked matching cards");
 
        // remove all elements from the user2 pile div
       // This was done becsuse when running throught for loop,
       //  the count would add to the already displayed cards
       var user2PileDiv = document.getElementById('user2-pile')
       while (user2PileDiv.firstChild) {
         user2PileDiv.removeChild(user2PileDiv.firstChild);
         }
  
       
       // diplay user2 cards 
        // console.log("User 2 number of cards",user2.mycards(matchedCards).length);
        for (var i = 0; i < user2.userCards.length; i++){
          for (var b = 0; b < user2.userCards[i].length; b++){
            var cardCount  = user2.userCards.length
            // double because cards pairs are list as 1 
            document.getElementById('user2-card-count').innerText = ("You oponent has "+ cardCount*2 + " Cards")
    
         const createUser1PileDiv = document.createElement('div')
         createUser1PileDiv.className = "user-2-pile"
         createUser1PileDiv.innerHTML = `<img src="imgs/PNG/${user2.userCards[i][b]}.png" alt="Trulli"></img>`;
         document.getElementById('user2-pile').appendChild(createUser1PileDiv);
        
    
         }
          }
        
      }

    })
    .then(function(){
      // empty matchedCards array 
        matchedCards = []
      })
    .catch(function (e){
      console.log(e);
    })
    
  //  console.log(injeraCardDeck1filtered);    
}




// socket.on('deck1Click', function (data) {
//     console.log(data.data.pop());
//    var Deck1PickedCard = data.data.pop()
//    var id = socket.io.engine.id 

//   socket.emit('myClick', {event: Deck1PickedCard, id:id});

// })


// get full card deck from gameSocket and push to array
// socket.on('deck1Click', function (data) {
//   unifiedCardDeck.push(data.data)
// })


// function playFromDeck1(){
//   console.log(unifiedCardDeck);  
//   // // var Deck1PickedCard = injeraCardDeck1filtered.pop()
//   // // // console.log("Picked Card is:",Deck2PickedCard)

//   // // var id = socket.io.engine.id 

//   // socket.emit('myClick', {event: Deck1PickedCard, id:id});
// }

// working____________________________________________________________________________ now need to fix two cards match on checkAndMovetoPiles
function playFromDeck1(){

  var id = socket.io.engine.id 
  socket.emit('deck1Click', {id:id});
}

function playFromDeck2(){

  var id = socket.io.engine.id 
  socket.emit('deck2Click', {id:id});
}

function playFromDeck3(){

  var id = socket.io.engine.id 
  socket.emit('deck3Click', {id:id});
}

function playFromDeck4(){

  var id = socket.io.engine.id 
  socket.emit('deck4Click', {id:id});
}
function playFromDeck5(){

  var id = socket.io.engine.id 
  socket.emit('deck5Click', {id:id});
}

function playFromDeck6(){

  var id = socket.io.engine.id 
  socket.emit('deck6Click', {id:id});
}

// function playFromDeck3(){
//   var Deck3PickedCard = injeraCardDeck3filtered.pop()
//     // console.log("Picked Card is:",Deck3PickedCard)

//     var id = socket.io.engine.id 

//     socket.emit('myClick', {event: Deck3PickedCard, id:id});
// }
// function playFromDeck4(){
//   var Deck4PickedCard = injeraCardDeck4filtered.pop()
//     // console.log("Picked Card is:",Deck4PickedCard)
 
//     var id = socket.io.engine.id 

//     socket.emit('myClick', {event: Deck4PickedCard, id:id});
// }
// function playFromDeck5(){
//   var Deck5PickedCard = injeraCardDeck5filtered.pop()
//     // console.log("Picked Card is:",Deck5PickedCard)

//     var id = socket.io.engine.id 

//     socket.emit('myClick', {event: Deck5PickedCard, id:id}); 
// }

// function playFromDeck6(){
//   var Deck6PickedCard = injeraCardDeck6filtered.pop()
//     // console.log("Picked Card is:",Deck6PickedCard)

//     var id = socket.io.engine.id 

//     socket.emit('myClick', {event: Deck6PickedCard, id:id});
// }


function resetGame(){
  // alert for user who reset 
  alert("You Wanted to Start a new Game. The game will reset.")
      
  socket.emit('playHasReset', {reset: "The game has been reset.A new game has started" });

      

   }