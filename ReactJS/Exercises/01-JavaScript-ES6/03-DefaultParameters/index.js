var multiply = function (a, b) {
  if (b === undefined) {
    b = 1;
  }
  return a * b;
}

// above same as:
const multiplyAlt = (a, b = 1) => a * b
console.log(multiplyAlt(3));
