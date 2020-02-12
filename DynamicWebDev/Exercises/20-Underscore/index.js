var nums = [1, 23, 56, 832, 45, 67, 8];

// console.log(_.shuffle(nums));
// console.log(nums);

var faces = _.range(2, 11).map(String).concat(['J', 'Q', 'K', 'A'])
var suits = ['diamonds', 'clubs', 'hearts', 'spades']

var deck = suits.map(function (suit) {
  return faces.map(function (face) {
    return { face: face, suit: suit }
  });
});

console.log(deck); // --> 4 arrays in 1 array

var flattenDeck = _.flatten(deck);
console.log(flattenDeck); // --> array of 52 objects

var shuffledDeck = _.shuffle(flattenDeck);
console.log(shuffledDeck);

var groupByFace = _.groupBy(shuffledDeck, function (card) { return card.face });
console.log(groupByFace);

var playerCards = _.sample(flattenDeck, 10); // --> random X cards
var cardsPerSuit = _.countBy(playerCards, 'suit');
console.log(cardsPerSuit);

var uniqueNumbers = _.union([5, 8, 9], [50, 8, 9], [5, 9]);
console.log(uniqueNumbers); // [ 5, 8, 9, 50 ]

var commonNumbers = _.intersection([5, 8, 9], [50, 8, 9], [5, 9]);
console.log(commonNumbers); // [ 9 ]

var onlyInFirst = _.difference([5, 8, 9, 10], [5, 7, 10]);
console.log(onlyInFirst); // [ 8, 9 ]
