// // https://www.altcademy.com/classroom/courses/javascriptium/assignments/5d5fdb30d358f80004661cd0

var roundsCount = 1;
var userScore = 0;
var botScore = 0;
var numOfRounds = false;

var newGame = function () {
  roundsCount = 1;
  userScore = 0;
  botScore = 0;
  if (confirm ('Start a new game?')) {
    numOfRounds = numberOfRounds();
    return round();
  }
  else {
    return earlyQuit();
  }
};

var numberOfRounds = function () {
  return confirm('Best of 3 rounds?\n\nCancel = 1 round.');
};

var round = function () {

  var bot = Math.floor (Math.random () * 3) + 1;
  var user = prompt('Enter choice:\n\n(1) - Rock\n(2) - Paper\n(3) - Scissors');

  // failsafe
  if (user.charCodeAt() < 49 || user.charCodeAt() > 51) {
    alert('Invalid input!')
    return earlyQuit();
  }

  if (numOfRounds === false) {
    determineWinner(bot, user);
    newGame();
  }
  else {
    while (userScore < 2 && botScore < 2) {
      determineWinner(bot, user);
      nextRound ();
    }
  }
};

var determineWinner = function (bot, user) {
  var result = (bot - user);
  if (result === -1 || result === 2) {
    userScore++;
    alert( 'Round won!\n\nTotal score:\nYou: ' + userScore + '\nComputer: ' + botScore);
  }
  else if (result === -2 || result === 1) {
    botScore++;
    alert( 'Round lost!\n\nTotal score:\nYou: ' + userScore + '\nComputer: ' + botScore);
  }
  else {
    alert( 'Round is a tie!\n\nTotal score:\nYou: ' + userScore + '\nComputer: ' + botScore);
  }
};

var nextRound = function () {
  roundsCount++;

  if (userScore === 2) {
    alert ('Game won!');
    newGame();
  }
  else if (botScore === 2) {
    alert ('Game lost!');
    newGame();
  }
  else if (userScore < 2 && botScore < 2) {
    console.log (userScore, botScore);
    round();
  }
};

var earlyQuit = function () {
  userScore = NaN; // NaN is not equal to itself, so determineWinner() won't be called
  botScore = NaN;
  return alert('Quitting...');
};

newGame();
