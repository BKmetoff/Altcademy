// scores:
//  - Ace + Ace = 12
//  - Ace + 10 = BlackJack
//  - Ace + >10 = sum
//  - 10 + 10 = sum
//  - 10 + >10 = sum
//  - >10 + >10 = sum

var deck = [];
var suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
var specialNames = ['Jack', 'Queen', 'King', 'Ace'];
var card = { suit: '', name: '', value: '' };
var randomCards = [];
var userScore = 0;

var createDeck = function () {

  card = { suit: '', name: '', value: ''};

  for (var i = 0; i < suits.length; i++) {
    for (var j = 2; j <= 10; j++) {
      card.suit = suits[i];
      card.name = j.toString();
      card.value = j;
      deck.push(card);
      card = { suit: '', name: '', value: ''}; // clear object elements after each iteration
    }

    for (var k = 0; k < specialNames.length; k++) {
      card.suit = suits[i];
      card.name = specialNames[k];

      // assign values to "10" cards
      if (specialNames[k] !== 'Ace') { card.value = 10}
      else { card.value = 11 }


      deck.push(card);
      card = { suit: '', name: '', value: ''};
    }
  }

  return deck;
};

var dealCards = function (numberOfCards) {

  randomCards = [];
  var randomCard = NaN;
  var firstDraw = 0;

  for (var i = 0; i < numberOfCards; i++) {

    randomCard = random();

    // failsafe against getting the same random draw twice:
    while (randomCard === firstDraw) { randomCard = random() }

    randomCards.push(deck[randomCard]);
    deck.splice(randomCard, 1); // remove drawn cards from deck

    firstDraw = randomCard;
  }

  // console.log (randomCards);
  return cardsCheck(userScore, randomCards);
};

var random = function () {
  return Math.floor (Math.random () * deck.length);
};


// calculate score:
var cardsCheck = function (userScore, arrayOfCards) {

  // after initial draw, check both cards in the array
  if (userScore === 0) {
    console.log (arrayOfCards[0].name)

    // both cards are Ace
    if (arrayOfCards[0].name === 'Ace' && arrayOfCards[1].name === 'Ace') {
      userScore = 12;
      console.log (userScore)
      // return userScore;
    }
    // one card is Ace, other card is a "10" card
    else if ((arrayOfCards[0].value === 10 && arrayOfCards[1].name === 'Ace')
    || (arrayOfCards[0].name === 'Ace' && arrayOfCards[1].value === 10)) {

      userScore = 21;
      console.log (userScore)
      // return userScore;
    }
    // sum card values in all other cases
    else {
      userScore = arrayOfCards[0].value + arrayOfCards[1].value;
      console.log (userScore)
      // return userScore;
    }
  }

  // after initial draw, check current score and the 1 extra card
  else {
    console.log (arrayOfCards);
    console.log (userScore)  ;
  }


};


// createDeck();
// dealCards();
// cardsCheck();

var newGame = function () {

  var startGame = confirm ('Start a new game?');
  if (startGame !== true) {
    return alert('Bye!');
  }
  else {
    createDeck();
    dealCards(2); // deal 2 cards at the start of the game
  }

};

newGame();
