// BLACKJACK project one ZK

/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();

/*-----state variables -----*/
let cpuHand = [];
let playerHand = [];
let cpuTotal = 0;
let playerTotal = 0;

/*----- cached elements  -----*/
const cpuContainer = document.querySelectorAll('.cpu-card-container > div');
const playerContainer = document.querySelectorAll('.player-card-container > div');
const outerPlayerContainer = document.querySelector('.player-card-container');
const outerCpuContainer = document.querySelector('.cpu-card-container');

/*----- event listeners -----*/
document.querySelector('#hit-button').addEventListener('click', hitPlayer);
document.querySelector('#stand-button').addEventListener('click', hitCpu);
document.querySelector('#start-button').addEventListener('click', dealHands);
document.querySelector('#restart-button').addEventListener('click', reDeal);

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

  // randomCard generates a random card from a full 52-card deck array from one deck of cards. All hands use one deck and reset one deck every hand.
  function randomCard() {
    const randomIdx = Math.floor(Math.random() * originalDeck.length);
    const card = originalDeck[randomIdx];
    originalDeck.splice(randomIdx, 1)
    return card;
  };

  // addsImage of card from CSS card library onto card div
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
  }}; 

  // dealHands begins the game when a player presses start. potential: change dealHands to init
  function dealHands() { 
    document.getElementById('restart-button').style.visibility = 'visible';
    document.getElementById('start-button').style.visibility = 'hidden';
   
    cpuHand = [randomCard(), randomCard()];
    playerHand = [randomCard(), randomCard()];
    addImage();
  };

  // reDeal resets the game and plays a new hand, new full 52 card deck.
  function reDeal() {
    window.location.reload(true);
    dealHands();
  };

  // This function logs the player clicking hit or stand. On stand, moves to cpuTurn.
  function hitPlayer() {
    const newCard = randomCard();
    playerHand.push(newCard);
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    outerPlayerContainer.appendChild(newDiv);
    addImage(playerContainer);

    const playerTotal = cardSum(playerHand);
      if (playerTotal > 21) {
        console.log("you're busted, buster.")
        document.getElementById("final-results").textContent = "uh oh! looks like you're over 21. try again, we believe in you.";
      } else if (playerTotal <= 21) {
        playerTurn();
  }};

  // playerTurn and cpuTurn are functions that hitPlayer and hitCpu are nested in, onto whoWins.
  function playerTurn(){};
  function cpuTurn(){};

  // hitCpu adds one card to dealer hand, repeats hit until dealer hits 17 or bust. Once dealer is content, move to function whoWins.
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
        document.getElementById("final-results").textContent = "THIS house? Busted.";
      };  
  };

  // cardSum adds card values for one hand, outputs one value
  function cardSum(hand) {
    console.log(hand);
    let sum = 0;
      for (let x in hand) {
      sum += hand[x].points;
    }
    return sum;
  };

  // whoWins compares the total card value for user and CPU, prints result.
  function whoWins() {
    const playerContainer = document.querySelectorAll('.player-card-container > div');
    const cpuContainer = document.querySelectorAll('.cpu-card-container > div');
  
    if (cardSum(playerHand) < cardSum(cpuHand)) {
      document.getElementById("final-results").textContent = "house wins...";
    } else if (cardSum(playerHand) > cardSum(cpuHand)) {
      document.getElementById("final-results").textContent = "you win!";
    } else if (cardSum(playerHand) === cardSum(cpuHand)) {
      document.getElementById("final-results").textContent = "is attire business casual? because that's a tie.";
    };
  };
