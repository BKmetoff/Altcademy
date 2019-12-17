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
var initialUserScore = 0;
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

var dealCards = function (numberOfCards, score) {

  randomCards = [];
  var randomCard = NaN;
  var firstDraw = 0;

  // create array of randomly generated card(s)
  for (var i = 0; i < numberOfCards; i++) {

    randomCard = random();

    // failsafe against getting the same random draw twice:
    while (randomCard === firstDraw) { randomCard = random() }

    randomCards.push(deck[randomCard]);
    deck.splice(randomCard, 1); // remove drawn cards from deck

    firstDraw = randomCard;
  }


  // in case user hits, they get only 1 card
  // return cardsCheck with 1 card on each hit
  if (numberOfCards === 2) {
    return cardsCheck(initialUserScore, randomCards[0], randomCards[1]);
  }
  else {
    return cardsCheck(score, randomCards[0]);
  }

};

var random = function () {
  return Math.floor (Math.random () * deck.length);
};


// calculate score
var cardsCheck = function (initialUserScore, card1, card2) {

  // after initial draw, check both cards in the array
  if (card2 !== undefined) {

    // both cards are Ace
    if (card1.name === 'Ace' && card2.name === 'Ace') {
      initialUserScore = 12;
      return displayScore(initialUserScore, card1, card2)
    }
    // one card is Ace, other card is a "10" card, i.e. BlackJack
    else if ((card1.value === 10 && card2.name === 'Ace')
    || (card1.name === 'Ace' && card2.value === 10)) {

      // initialUserScore = 21;
      return blackJack();
    }
    // sum card values in all other cases
    else {
      initialUserScore = card1.value + card2.value;
      return displayScore(initialUserScore, card1, card2)
    }
  }

  // after each hit, check current score and extra card
  else {

    console.log ('score on hit', initialUserScore);
    console.log ('new card', card1);


    // handle cases of getting an Ace as a new card
    if (card1.name === 'Ace') {

      // Ace scores as 1 if 11 will bring the score above 21
      if (initialUserScore + 11 > 21) {
        console.log ('Ace as 1 ', initialUserScore + 1)
        initialUserScore++
        displayScore (initialUserScore, card1);
      }

      else if ( (initialUserScore + 11 === 21) || (initialUserScore + 1 === 21) ) {
        console.log ('BlackJack with Ace as 1 or 11');
        blackJack();
      }
    }

    if (card1.value + initialUserScore === 21) {
      console.log ('BlackJack with new card');
      blackJack();
    }

    else if (card1.value + initialUserScore > 21) {
      console.log ('bust');
      initialUserScore += card1.value;
      bustGame(initialUserScore);
    }

    else {
      console.log ('add new card to score (no BlackJack/bust)', initialUserScore + card1.value);

      initialUserScore += card1.value;
      displayScore(initialUserScore, card1)
    }

  }
};


var displayScore = function (score, card1, card2) {

  var hit = null;

  // card2 is undefined for Hits, display the new card & the score
  if (card2 === undefined) {

    hit = confirm ('You got ' + card1.name + ' of ' + card1.suit + '\n\nCurrent score: ' + score + '\n\nOK = Hit\nCancel = Hold')

  }

  else {
    hit = confirm ('You got ' + card1.name + ' of ' + card1.suit + ' & ' + card2.name + ' of ' + card2.suit + '\n\nScore: ' + score + '\n\nOK = Hit\nCancel = Hold')
  }

  return hitOrHold(score, hit)

}

var hitOrHold = function (score, bool) {

  if (bool === false) {
    return newGame()
  }

  return (dealCards(1, score))

}

var blackJack = function () {

  alert ('BlackJack! You Win!')
  newGame()

}

var bustGame = function (bustScore) {
  alert ('You lose! :(\n\n Final score: ' + bustScore);
  newGame();
}

var newGame = function () {

  initialUserScore = 0;
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
