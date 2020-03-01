$(document).ready(function () {

  // store current question, score & time;
  var interval;
  var currentQ;
  var userScore = 0;
  var userTime = 10;
  $('#timer').text(userTime);

  // random numbers
  var randomNumGenerator = function (maxNumber) {
    return Math.ceil(Math.random() * maxNumber);
  }

  // equation
  var equation = function () {
    var num1 = randomNumGenerator(10);
    var num2 = randomNumGenerator(10);

    var question = {};
    question.answer = num1 + num2;
    question.equation = num1.toString() + ' + ' + num2.toString();

    return question;
  }

  // questions
  var getNewQuestion = function () {
    currentQ = equation();
    $('#equation').text(currentQ.equation);
  }

  // user score
  var updateUserScore = function () {
    $('#currentScore').text(userScore++);
  };

  // listener, user input
  $('#userInput').on('keyup', function () {
    compareAnswer(Number($(this).val()),currentQ.answer);

    startGame();
  })

  // compare user input
  var compareAnswer = function (userInput, answer) {
    if (userInput === answer) {

      $('#userInput').val('');
      getNewQuestion();
      updateUserScore();

      $('#timer').text(updateTimer(1));
      console.log('userinput ' + userTime);

    }
  }

  // start timer (saw this from walkthrough)
  var startGame = function () {
    if (!interval) {

      if (userTime === 0) {
        clearInterval(interval);
      }

      interval = setInterval(function () {
        $('#timer').text(updateTimer(-1));
        if (userTime === 0) {
          clearInterval(interval);
          interval = undefined;
          gameOver();
        }
        console.log('timer ' + userTime);
      }, 1000)
    }
  }

  var gameOver = function () {
    $('#timer').css('color', '#dc3545');
    $('.input-group').addClass('hidden');
    $('#newGame').removeClass('hidden');
    $('#gameOver').removeClass('hidden');
    $('#userInput').val('');
  }

  // update timer
  var updateTimer = function (seconds) { return userTime += seconds; }

  // on load
  getNewQuestion();
  updateUserScore();
  $('#userInput').val('');

})
