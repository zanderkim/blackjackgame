//BLACKJACK project one ZK

/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

const originalDeck = buildOriginalDeck();
/*----- constants -----*/

/*-----state variables -----*/
let shuffledDeck; //newDeck
let cpuHand = [];
let playerHand = [];
let cpuTotal = 0;
let playerTotal = 0;

/*----- cached elements  -----*/
const cpuContainer = document.querySelectorAll('.cpu-card-container > div');
const playerContainer = document.querySelectorAll('.player-card-container > div');
  
/*----- event listeners -----*/
// document.querySelector('hit-button').addEventListener('click', hitPlayer);
// document.querySelector('stand-button').addEventListener('click', cpuTurn);
document.querySelector('#deal-new-hand-button').addEventListener('click', dealHands);

  /*---- functions -----*/
  // builds one (1) deck the dealer uses. new deck every hand.
  function buildOriginalDeck() {
    const originalDeck = [];
    suits.forEach(function(suit) {
      values.forEach(function(value) {
        originalDeck.push({
          face: `${suit}${value}`,
          points: Number(value) || (value === 'A' ? 11 : 10)
        });
      });
    });
    return originalDeck;
};

  function shuffleDeck() {
    for (let i = 0; i < originalDeck.length, i++) {
      const randomIdx = Math.floor(Math.random() * originalDeck.length);
      originalDeck.splice(randomIdx, 1)
      return card;
    }
  }
 // This function generates a random card, set in an array from one deck of cards
  function randomCard() {
    const randomIdx = Math.floor(Math.random() * originalDeck.length);
    const card = originalDeck[randomIdx];
    originalDeck.splice(randomIdx, 1)
    return card;
};
 // addsImage of card from CSS card library 
  function addImage() {
    console.log(cpuContainer[0]);
    for (let i =0; i < cpuContainer.length; i++) {
    cpuContainer[i].classList.add(cpuHand[i].face)
  };
  console.log(playerContainer[0])
    for (let i=0; i < playerContainer.length; i++) {
    playerContainer[i].classList.add(playerHand[i].face);
  }
}; 

// JS
// Copy to Clipboard
// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });

// This function begins the game when a player presses start, button text then changes to deal new hand.
  function dealHands() { 
    cpuHand = [randomCard(), randomCard()];
    playerHand = [randomCard(), randomCard()];
    addImage(cpuHand);
    addImage(playerHand);
    playerTurn();
    // cpuTurn();
    // whoWins();
    console.log(cpuHand);
  console.log(playerHand);
  };

  // playerTurn(playerHand);
  // console.log('cpu', cpuHand);
  // console.log('player', playerHand);

// This function logs the player hit or stand, then moves to the CPU's turn
    function hitPlayer() {
      const newCard = randomCard();
      const playerHand = [];
      playerHand.push(newCard);
      addImage(playerContainer);

      const playerTotal = cardSum(playerHand);
        if (playerTotal > 21) {
          console.log("you're busted, buster.")
          alert("you're busted, buster.");
        } else if (playerTotal <= 21) {
          playerTurn();
        }      
    };

    function playerTurn(){
    };

    function cpuTurn() {
      // flip card 
      const cpuTotal = cardSum(cpuHand);
        if (cpuTotal > 21) {
          console.log("THIS house? Busted.")
        } else if (cpuTotal <17) {
          hitCpu();
        } else if (cpuTotal >= 17) {
          whoWins();
        };
    };

    function hitCpu() {
      const houseCard = randomCard();
      const cpuHand = [];
      cpuHand.push(houseCard);
      addImage(cpuContainer);
    };

// This function adds card values for user and CPU
// function cardSum(hand) {
//   let cardValue = 0;
//   let hasAce = false;

//   hand.forEach(function(card) {
//     for (let i =0; i < hand.length; i++) {
//       card.Value + cardSum[i]
//     }
//   })
//     card.Value += Math.min(10, value);
//     hasAce ||= value == 1;
//   };
//   return hasAce && cardValue <= 11 ? cardValue + 10 : cardValue;};
// console.log(cardSum(randomCard()));
  // add value of cards in cpu-card-container 

function addImage() {
  console.log(cpuContainer[0]);
  for (let i =0; i < cpuContainer.length; i++) {
  cpuContainer[i].classList.add(cpuHand[i].face)
};
console.log(playerContainer[0])
  for (let i=0; i < playerContainer.length; i++) {
  playerContainer[i].classList.add(playerHand[i].face);
}
}; 

// This function compares the total card value for user and CPU
const whoWins = () => {
  if (cardSum(cpuHand) > cardSum(playerHand))
    alert("House wins!");
 else if (cardSum(cpuHand) > cardSum(playerHand))
    alert("You win!");
 else if (cardSum(cpuHand) === cardSum(playerHand))
    (alert)("It's a draw.");
};

// renderNewShuffledDeck();
// function startGame
// flow
  // startGame(dealHands)
  // dealHands
        // playerTurn;
            // hit me
        // cpuTurn;
          // hit me
  // print winner
  // deal new hand is same as start button
//   function(dealHands(())
// $0.classList.add(`${suits[indexedDB]}${values[indexedDB]]}`);
// const hitCPU = 
// if ()
// display total somewhere on table
// console.log(cardSum)
// const hitPlayer = () => {};
// const standButton = () => {};
// ADDITIONAL flavor
// Change button to "start" at first then "deal new hand"
// Sound, card animation
// different table colors
// different decks
// input user name, choose signature affectation/style
// sound effects -- stars/sparkles when you hit blackjack
//    reshuffling the deck, dealing out cards, dealing out chips
// visual effects -- fireworks on blackjack
// const changeText = document.querySelector("#deal-new-hand-button");
// changeText.addEventListener("click", function() {
//   changeText.textContent = "deal new hand";
// })
