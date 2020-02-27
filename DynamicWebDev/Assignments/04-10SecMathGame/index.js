$(document).ready(function () {
  var currentQ;
  var randomNumGenerator = function (maxNumber) {
    return Math.ceil(Math.random() * maxNumber);
  }

  var equation = function () {
    var num1 = randomNumGenerator(10);
    var num2 = randomNumGenerator(10);

    var question = {};
    question.answer = num1 + num2;
    question.equation = num1.toString() + ' + ' + num2.toString();

    return question;
  }

  currentQ = equation();
  $('#equation').text(currentQ.equation);
})
