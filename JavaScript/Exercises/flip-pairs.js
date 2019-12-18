// https://repl.it/student/submissions/9704444
//
// For this assignment, implement code that will flip every pair of characters in a string.
//
// I.e.
// "hello" becomes "ehllo"
// "world" becomes "owlrd"
// "hello world" becomes "ehll oowlrd"

var flipPairs = function (fullString) {

  var stringBits = [];
  for (var i = 0; i < fullString.length; i += 2) {
    stringBits.push (fullString.substring(i, i + 2))
  }
  return result(stringBits);
}

var reverse = function (stringBit) {
  return stringBit.split('').reverse().join('')
}

var loopThruBits = function (elementOfArray) {
  return reverse(elementOfArray);
}


var result = function (arrayOfBits) {
  var reversedString = ''

  for (var k = 0; k < arrayOfBits.length; k++) {
    reversedString += loopThruBits(arrayOfBits[k])
  }

  return reversedString;
}
