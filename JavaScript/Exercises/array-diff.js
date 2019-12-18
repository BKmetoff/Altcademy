// https://www.codewars.com/kata/523f5d21c841566fde000009

// All values in B that are in A should be removed from A

function array_diff(a, b) {
  
  for (var elemOfB = 0; elemOfB <= b.length; elemOfB++) {
    
    for (var elemOfA = 0; elemOfA <= a.length; elemOfA++ ) {
      removeElement(b[elemOfB], a)
    }    
  }
  return a;
}

var removeElement = function (array_element, array) {
  for (var j = 0; j < array.length; j++ ) {
    
    if (array_element === array[j]) {
      array.splice (j, 1);
    }
  }
}

console.log (array_diff([1, 2, 2], [1]))


