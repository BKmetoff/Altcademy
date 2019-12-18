// https://repl.it/student/submissions/9775979


// An isogram is a word that has no repeating letters, whether its consecutive or non consecutive.
// The isIsogram function will be passed an string input, determine whether it is an isogram.
// If it is, return true, otherwise return false.

var isIsogram = function (word) {

  var sortLetters = word.split('').sort()
  var check = 0;

  for (var i = 1; i <= sortLetters.length; i++) {
    if (sortLetters[i] === sortLetters[i - 1]) { check++ }
  }

  if (check > 0) { return false; }
  return true
}



console.log (isIsogram('hello'))
