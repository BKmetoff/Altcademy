// https://repl.it/student/submissions/9614255


// Write a program that creates a string that represents an 8×8 grid using newline characters to separate lines.
// At each position of the grid there is either a space " " or a "#" character.
// The characters should form a chess board.

function createGrid(height, width) {
  output = '';
  for (var k = 1; k <= height; k++) {
    if (k % 2 ===0) {
      output += rowWb(width)
    }
    else {
      output += rowBW(width)
    }

    if (k === height) {
      break
    }
  output += '\n'

  }
  return output
}


var rowWb = function (horizontal) {
 	var charWB = '';
  var rowWB = '';
   for (var i = 1; i <= horizontal; i++) {
 	  if (i % 2 === 0) {
 	    charWB = ' '
 	    rowWB += charWB;
 	  }
 	  else {
 	    charWB = '#'
 	    rowWB += charWB;
 	  }
 	}
  return rowWB
}


var rowBW = function (horizontal) {
  var charBW = '';
  var rowBW = ''
  for (var j = 1; j <= horizontal; j++) {
    if (j % 2 === 0) {
 	    charBW = '#'
 	    rowBW += charBW;
 	  }
 	  else {
 	    charBW = ' '
 	    rowBW += charBW;
 	  }
  }
  return rowBW
}

console.log(createGrid(3, 3));

// console.log(createGrid(3, 3) === " # \n# #\n # ");
// console.log(createGrid(4, 3) === " # \n# #\n # \n# #");
