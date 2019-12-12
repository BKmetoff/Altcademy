// scores:
//  - Ace + Ace = 12
//  - Ace + 10 = BlackJack
//  - Ace + >10 = sum
//  - 10 + 10 = sum
//  - 10 + >10 = sum
//  - >10 + >10 = sum


// var newGame = function () {};
// var userChoice = function () {};
// var userStand = function () {};
// var userHit = function () {};
// var userScore = 0;
// var userScoreCheck = function ();

var deck = [];
var suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
var specialNames = ['Jack', 'Queen', 'King', 'Ace'];
var card = { suit: '', name: '', value: '' };
var randomCards = [];
var userScore = 0;

// returns an array of card objects
var createDeck = function () {

  card = { suit: '', name: '', value: ''};

  for (var i = 0; i < suits.length; i++) {
    for (var j = 2; j <= 10; j++) {
      card.suit = suits[i];
      card.name = j.toString();
      card.value = j;
      deck.push(card);
      card = {suit: '', name: '', value: ''}; // clear object elements after each iteration
    }

    for (var k = 0; k < specialNames.length; k++) {
      card.suit = suits[i];
      card.name = specialNames[k];

      // assign values to "10" cards
      if (specialNames[k] !== 'Ace') {card.value = 10}
      else {card.value = 1}

      deck.push(card);
      card = { suit: '', name: '', value: ''};
    }
  }

  return deck;
};

// returns an array of 2 random cards
var dealCards = function () {

  randomCards = [];
  var randomCard = NaN;
  var firstDraw = 0;

  for (var i = 0; i < 2; i++) {

    randomCard = random();

    // failsafe against getting the same random draw twice:
    while (randomCard === firstDraw) { randomCard = random() }

    randomCards.push(deck[randomCard]);
    deck.splice(randomCard, 1); // remove drawn cards from deck

    firstDraw = randomCard;
  }

  return randomCards;
};

// returns random card from the remaining array elements after a card has been removed on each draw
var random = function () {
  return Math.floor (Math.random () * deck.length);
};


// check of first 2 cards that are dealt:
var cardsCheck = function () {
  console.log (randomCards[0].value, randomCards[1].value);
  // both cards are Ace
  if (randomCards[0].value === 'Ace' && randomCards[1].value === 'Ace') {
    userScore = 12;
    console.log (randomCards[0].value, randomCards[1].value);
    return userScore;
  }

  // one card is Ace, other card is a "10" card
  else if ((randomCards[0].value === 10 && randomCards[1].value === 'Ace')
  || (randomCards[0].value === 'Ace' && randomCards[1].value === 10)) {

    userScore = 21;
    console.log (randomCards[0].value, randomCards[1].value);
    return userScore;
  }

  // both cards are "10" cards
  else if (randomCards[0].value === 10 && randomCards[1].value === 10) {
    userScore = 20;
    console.log (randomCards[0].value, randomCards[1].value);
    return userScore;

  }
};


createDeck();
dealCards();
console.log(cardsCheck());
console.log(userScore);
