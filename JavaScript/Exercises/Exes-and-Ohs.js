// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {

  var countOfOs = str.split('').filter(function(element) {
    return element.toLowerCase() == 'o'
  })

  var countOfXs = str.split('').filter(function(element) {
    return element.toLowerCase() == 'x'
  })

  return countOfOs.length === countOfXs.length

}

console.log (XO('zzoo'))
