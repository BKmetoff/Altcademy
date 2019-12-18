// https://repl.it/student/submissions/9725785

// In this exercise, your function will be given an array of positive integers, and a number called SUM.
// Your objective is to find a pair of numbers from the array that adds up to be the SUM.
// Return the pair of numbers in an array with the smaller number first.

// console.log(findPairForSum([3, 7, 10, 15, 9], 19));
// // -> [9, 10]
// console.log(findPairForSum([6, 8, 12, 14, 2, 4], 6));
// // -> [2, 4]


var arr = [6, 8, 2, 14, 2, 4];
var numToCheck = 18;

var checkSum = function (num1, num2, sum) {
  if (num1 + num2 === sum) { return true }
}

var loop = function (array, numberToCheck) {
  var result = []
  for (var i = 0; i < arr.length; i++) {

    for (var k = 0; k < arr.length; k++) {

      if (array[i] === array[k]) { continue }
      if (checkSum(array[i], array[k], numberToCheck) === true) {
        result.push(array[i])
        result.push(array[k])

        return result.sort(function(a, b) {return a-b})
      }
    }
  }
}

console.log (loop(arr, numToCheck))
