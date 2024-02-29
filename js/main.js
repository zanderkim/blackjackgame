// BLACKJACK project one ZK

/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();

/*-----state variables -----*/
let shuffledDeck; //newDeck
let cpuHand = [];
let playerHand = [];
let cpuTotal = 0;
let playerTotal = 0;

/*----- cached elements  -----*/
const cpuContainer = document.querySelectorAll('.cpu-card-container > div');
const playerContainer = document.querySelectorAll('.player-card-container > div');
// const playerContainerNodes = document.querySelectorAll('.player-card-container > div');
// let playerContainer = Array.from(playerContainerNodes);
console.log(playerContainer);
const outerPlayerContainer = document.querySelector('.player-card-container');
const outerCpuContainer = document.querySelector('.cpu-card-container');

/*----- event listeners -----*/
document.querySelector('#hit-button').addEventListener('click', hitPlayer);
document.querySelector('#stand-button').addEventListener('click', hitCpu);
document.querySelector('#start-button').addEventListener('click', dealHands);
// document.querySelector('#restart-button').addEventListener('click', location.reload(true));

/*---- functions -----*/
  // builds one (1) deck the dealer uses. new deck every hand. each card has a face and point value
  function buildOriginalDeck() {
    const deck = [];
    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deck.push({
          face: `${suit}${value}`,
          points: Number(value) || (value === 'A' ? 11 : 10)
        });
      });
    });
    return deck;
  };
  // card.classList.remove -- remove and add class every time start is pressed

 // This function generates a random card, set in an array from one deck of cards (the same deck)
  function randomCard() {
    const randomIdx = Math.floor(Math.random() * originalDeck.length);
    const card = originalDeck[randomIdx];
    originalDeck.splice(randomIdx, 1)
    return card;
};
 // addsImage of card from CSS card library 
  function addImage() {
    const playerContainer = document.querySelectorAll('.player-card-container > div');
    const cpuContainer = document.querySelectorAll('.cpu-card-container > div');
    console.log(cpuContainer[0]);
    console.log(playerContainer);
    for (let i =0; i < cpuContainer.length; i++) {
    cpuContainer[i].classList.add(cpuHand[i].face)
  };
    console.log(playerContainer[0])
    for (let i=0; i < playerContainer.length; i++) {
    playerContainer[i].classList.add(playerHand[i].face);
  }
}; 

// <button id="restart-button" onClick=location.reload(true)></button>
// html hidden button that appears after start. 
// add event listener to new button -- location reload
// restarbutton.style.visibility = hidden in VS, visible in JS
// This function begins the game when a player presses start, button text then changes to deal new hand.
  function dealHands() { 
    // document.getElementById('#restart-button').style.visibility="visible";
    cpuHand = [randomCard(), randomCard()];
    playerHand = [randomCard(), randomCard()];
    addImage();
    // playerTurn();
    // cpuTurn();
    // whoWins();
    // if (cardSum(cpuHand) >= 17 && cardSum(cpuHand) <= 21) {
    //   whoWins();
    // };
  };

// This function logs the player hit or stand, then moves to the CPU's turn
  function hitPlayer() {
    const newCard = randomCard();
    playerHand.push(newCard);
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    outerPlayerContainer.appendChild(newDiv);
    addImage(playerContainer);

    const playerTotal = cardSum(playerHand);
    // const cpuTotal = cardSum(cpuHand);
      if (playerTotal > 21) {
        console.log("you're busted, buster.")
        document.getElementById("final-results").textContent = "busted! your hand is over 21.";
      } else if (playerTotal <= 21) {
        playerTurn();
  }};

  function playerTurn(){};
  function cpuTurn(){};
  
     // flip card
     
  function hitCpu() {
    const houseCard = randomCard();
    const cpuTotal = cardSum(cpuHand);
      if (cpuTotal < 17) {
        cpuHand.push(houseCard);
        const newDiv = document.createElement("div");
        newDiv.className = "card";
        outerCpuContainer.appendChild(newDiv);
        addImage(cpuContainer);
        hitCpu(); 
      } else if (cpuTotal <=21 && cpuTotal >=17) {
        whoWins();
      } else if (cpuTotal > 21) {
        document.getElementById("final-results").textContent = "The house busted! Over 21.";
      };  
  };

// This function adds card values for user and CPU
  function cardSum(hand) {
    console.log(hand);
    let sum = 0;
      for (let x in hand) {
      sum += hand[x].points;
    }
    return sum;
  };

// This function compares the total card value for user and CPU
  function whoWins() {
    const playerContainer = document.querySelectorAll('.player-card-container > div');
    const cpuContainer = document.querySelectorAll('.cpu-card-container > div');
  
    if (cardSum(playerHand) < cardSum(cpuHand)) {
      document.getElementById("final-results").textContent = "House wins!";
    } else if (cardSum(playerHand) > cardSum(cpuHand)) {
      document.getElementById("final-results").textContent = "You win!";
    } else if (cardSum(playerHand) === cardSum(cpuHand)) {
      document.getElementById("final-results").textContent = "That's a tie.";
    };
  };

// ADDITIONAL flavor
// Change button to "start" at first then "deal new hand"
// Sound, card animation
// different table colors
// different decks
// input user name, choose signature affectation/style
// sound effects -- stars/sparkles when you hit blackjack
//    reshuffling the deck, dealing out cards, dealing out chips
// visual effects -- fireworks on blackjack
