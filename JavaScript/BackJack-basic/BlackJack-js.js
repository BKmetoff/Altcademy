// var newGame = function () {};
// var userChoice = function () {};
// var userStand = function () {};
// var userHit = function () {};


var deck = [];
var suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
var specialValues = ['Jack', 'Queen', 'King', 'Ace'];
var card = { suit: '', value: ''};
var randomCards = [];
var userScore = 0;

var createDeck = function () {

  deck = [];
  card = { suit: '', value: ''};

  for (var i = 0; i < suits.length; i++) {
    for (var j = 2; j <= 10; j++) {
      card.suit = suits[i];
      card.value = j.toString();
      deck.push(card);
      card = { suit: '', value: ''}; // clear object elements after each iteration
    }

    for (var k = 0; k < specialValues.length; k++) {
      card.suit = suits[i];
      card.value = specialValues[k];
      deck.push(card);
      card = { suit: '', value: ''};
    }
  };

  return deck;
};

var dealCards = function () {

  randomCards = [];
  var randomCard = 0;
  var firstDraw = 0;

  for (var i = 0; i < 2; i++) {

    randomCard = random();

    // failsafe against getting the same random draw twice:
    while (randomCard === firstDraw) { randomCard = random() };

    randomCards.push(deck[randomCard]);
    deck.splice(randomCard, 1); // remove drawn cards from deck

    firstDraw = randomCard;
  }

  return randomCards;
};

var random = function () {
  return Math.floor (Math.random () * 51) + 1
};



var checkDealtCards = function () {

  if (randomCards[0].value >= 2 && randomCards[0].value <= 9) {
    userScore = userScore + Number(randomCards[0].value)
  }
  else if ()


  return userScore;
};

createDeck();
dealCards();
checkDealtCards();
console.log (checkDealtCards())
