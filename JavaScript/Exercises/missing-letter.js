// https://repl.it/student/submissions/9799006

// In this exercise, you are given a string of letters that follow the order of the alphabet. "abcd...xyz".
// In the string, there will be a missing letter. Find the missing letter and return it.


var missingLetter = function (string) {

  for(i=97,alphabet='';i<123;){alphabet+=String.fromCharCode(i++)}

  var splitStr = string.split('')

  var startPosition = alphabet.indexOf(string[0])
  var endPosition = alphabet.indexOf(string[string.length-1])

  var stringToCheck = alphabet.substring(startPosition, endPosition+1)

  for (var i = 0; i < stringToCheck.length; i++) {

    if (splitStr.includes(stringToCheck[i]) === false) {
      return stringToCheck[i]
    }
  }

  return undefined

};

console.log (missingLetter('cdefg'))
