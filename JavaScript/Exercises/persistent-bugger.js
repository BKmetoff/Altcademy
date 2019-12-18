// https://www.codewars.com/kata/persistent-bugger/train/javascript

// describe('Initial Tests', function () {
//   Test.assertEquals(persistence(25),2);
//   Test.assertEquals(persistence(4),0);
//   Test.assertEquals(persistence(39),3);
//   Test.assertEquals(persistence(999),4);
// });

var persistence = function (num) {
  var counter = 0;

  if (num.toString().length === 1) {
    return counter;
  }

  product = reduce (num.toString().split(''))
  counter++

  while (product.toString().length > 1) {
    product = reduce(product.toString().split(''))
    counter++
  }
  return counter;
}

var reduce = function (array) {
  return array.reduce(function(multiply, number) {
    return multiply * number;
  })
}

console.log (persistence(1234))
