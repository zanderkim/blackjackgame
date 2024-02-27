  
//BLACKJACK project one ZK

  /*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();
renderDeckInContainer(originalDeck, document.getElementById('original-deck-container'));

/*----- constants -----*/
  /*-----state variables -----*/
  // gameboard "table" = 2 card spaces for player and dealer
  // turn: player goes first, then runs DealerTurn
  let turn; // 1 for player, -1 for CPU
  let table; // table for the cards and chips, 2D array. no player: null
  let winner; // tie, house wins, bust
  let shuffledDeck; //newDeck

  /*----- cached elements  -----*/
  const shuffledContainer = document.getElementById('shuffled-deck-container');
// messages
// play again button

  /*----- event listeners -----*/
// click buttons -> hit, stand, bet, SPLIT optional
// document.querySelector('hitMe').addEventListener('click', renderNewCard);

// dealHand begins game
  // <button onclick="dealHand()">deal</button>
// hitButton adds one card to CPU or User
  // <button onclick="hitButton">hit</button>
  // Stand button ends
  // <button onclick="standButton">stand</button>

// playAgain button
  /*---- functions -----*/

// function startGame
//   function(dealHands(())

function buildOriginalDeck() {
  const deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(value) {
      deck.push({
        face: `${suit}${value}`,
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
};

const dealHands () =>
  cpuHand = [.card.small`${suit}${value}`, randomCard()];
  playerHand = [randomCard(), randomCard()];


const randomCard = () => {
  const randomIdx = Math.floor(Math.random() * originalDeck.length);
  const card = originalDeck[randomIdx];
  return card;
}
  console.log(randomCard);

function cpuTurn = ()

const dealHand();
const playerTurn = playerTurn();
const cpuTurn = cpuTurn();
const hitButton = ();
const standButton = ();

// renderNewShuffledDeck();

// const dealHands = () => {
//   dealerHand = [selectRandomCard(), selectRandomCard()];
//   dealerHand.forEach((card, index) => {
//       const newCard = CARD_MODEL.cloneNode(true);
//       index === 0 ? newCard.classList.add('back') : newCard.innerHTML = card;
//       (card[card.length - 1] === '♦' || card[card.length - 1] === '♥') && newCard.setAttribute('data-red', true);
//       DEALER.append(newCard);
//   })
//   playerHand = [selectRandomCard(), selectRandomCard()];
//   playerHand.forEach((card) => {
//       const newCard = CARD_MODEL.cloneNode(true);
//       newCard.innerHTML = card;
//       (card[card.length - 1] === '♦' || card[card.length - 1] === '♥') && newCard.setAttribute('data-red', true);
//       PLAYER.append(newCard);
//   })
// }
/*----- functions -----*/
function getNewShuffledDeck() {
  // Create a copy of the originalDeck (leave originalDeck untouched!)
  const tempDeck = [...originalDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function renderNewShuffledDeck() {
  // Create a copy of the originalDeck (leave originalDeck untouched!)
  shuffledDeck = getNewShuffledDeck();
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  let cardsHtml = '';
  deck.forEach(function(card) {
    cardsHtml += `<div class="card ${card.face}"></div>`;
  });
  // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup 
  // const cardsHtml = deck.reduce(function(html, card) {
  //   return html + `<div class="card ${card.face}"></div>`;
  // }, '');
  container.innerHTML = cardsHtml;
}


renderNewShuffledDeck();

// BEGIN ORIGINAL CODE 

  // card deck: 52 cards per deck, have dealer cycle through 3 decks and then shuffle

  /*----- state variables -----*/

  // // gameboard "table" = 2 card spaces for player and dealer
  // // turn: player goes first, then runs DealerTurn
  // let turn; // 1 for player, -1 for CPU
  // let table; // table for the cards and chips, 2D array. no player: null
  // let winner; // tie, house wins, bust
  // let shuffledDeck; 


  /*----- cached elements  -----*/
// messages
// play again button

  /*----- event listeners -----*/
// click buttons -> hit, stand, bet, SPLIT optional
// playAgain button

  /*----- functions -----*/

  // playGame () / renderGame ()
 // init()

//  function rendr () {
//   renderBoard();
//   renderScores();
//   renderControls();
//   render
//  }

 // function playGame -> 
 //       startGame, 
 //             playerBet
//                  dealPlayerHand, 
//                         if hand = 21 -> stand
//                          SPLIT optional (part of both player and house)
//                   dealHouseHand
//                        if hand >= 17 -> stay
//                findWinner() -> Player wins/House wins/Push/
//              nextHand with same deck or recycling one 52-card deck

// ADDITIONAL flavor
// different table colors
// different decks
// input user name, choose signature affectation/style
// sound effects -- stars/sparkles when you hit blackjack
  //  reshuffling the deck, dealing out cards, dealing out chips
// visual effects -- fireworks on blackjack
