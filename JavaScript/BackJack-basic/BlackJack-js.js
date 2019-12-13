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
  console.log (deck.length);
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
  // return dealCards(deck, 2);
};

var dealCards = function (numberOfCards) {

  randomCards = [];
  var randomCard = NaN;
  var firstDraw = 0;

  // on the 1st deal of the game, the player will receive 2 cards.
  // on each Hit, the player will receive 1 card.
  if (numberOfCards !== 1) {
    numberOfCards = 2;
  }

  for (var i = 0; i < numberOfCards; i++) {

    randomCard = random();

    // failsafe against getting the same random draw twice:
    while (randomCard === firstDraw) {randomCard = random()}

    randomCards.push(deck[randomCard]);
    deck.splice(randomCard, 1); // remove drawn cards from deck

    firstDraw = randomCard;
  }
  console.log (deck.length);
  return cardsCheck(randomCards);
};

var random = function () {
  // var checkNum = 0;
  // checkNum = Math.floor (Math.random () * deck.length);
  // return checkNum;
  return Math.floor (Math.random () * deck.length);
};


// calculate score of first 2 cards that are dealt:
var cardsCheck = function (arrayOfRandomCards) {
  console.log (arrayOfRandomCards[0])
  console.log (arrayOfRandomCards[0].value, arrayOfRandomCards[1].value);

  // both cards are Ace
  if (arrayOfRandomCards[0].name === 'Ace' && arrayOfRandomCards[1].name === 'Ace') {
    userScore = 12;
    // return userScore;
  }

  // one card is Ace, other card is a "10" card
  else if ((arrayOfRandomCards[0].value === 10 && arrayOfRandomCards[1].name === 'Ace')
  || (arrayOfRandomCards[0].name === 'Ace' && arrayOfRandomCards[1].value === 10)) {

    userScore = 21;
    // return userScore;
  }

  // sum card values in all other cases
  else {
    userScore = arrayOfRandomCards[0].value + arrayOfRandomCards[1].value;
    // return userScore;
  }

  return userScore

};


// returns TRUE for Hit/FALSE for hold
var hitOrHold = function () {

  var hit = confirm('\nYou are dealt: ' + randomCards[0].name + ' of ' + randomCards[0].suit +
' & ' + randomCards[1].name + ' of ' + randomCards[1].suit + '\nTotal score: ' + userScore + '\n\nOK = Hit\nCancel = Hold');

  if (hit === true) {
    return extraCard();
  }

  // return newGame();
};


// calls dealCards()
var extraCard = function () {
  // console.log ('more card');
  return dealCards(1);
};


createDeck();
dealCards();
cardsCheck();
hitOrHold();
// console.log (deck.length);
