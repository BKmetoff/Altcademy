// https://repl.it/student/submissions/9775682

var average = (array) => {
  var sum = array.reduce (function (total, el){
    return total + el
  })
  return sum / array.length;
}

console.log (average([1, 3, 5, 7, 9]))


