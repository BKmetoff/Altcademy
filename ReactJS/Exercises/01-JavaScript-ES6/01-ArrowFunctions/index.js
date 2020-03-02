const double = function (x) {
  return x * 2;
}

// const tripple = (x) => {
//   return x * 3;
// }

// same as ^:
const tripple = x => x * 3;

console.log(double(3));
console.log(tripple(3));

const foo = () => {
  return {
    a: 1,
    b: 2
  }
}

const bar = () => ({
  a: 1,
  b: 2
})

console.log([1, 2, 3].reduce((a, b) => a + b));
console.log([1, 2, 3].map(a => 3 * a));

const evens = [1, 2, 3, 4].filter(x => {
  if (x % 2 === 0) {
    return true;
  }
  return false;
})

const evensAlt = [1, 2, 3, 4].filter(x => x % 2 === 0);

console.log(evens);
console.log(evensAlt);

const car = {
  speed: 20,
  getSpeed: () => console.log(this.speed, this), // no THIS value
  getSpeed2: function () {
    console.log(this.speed, this);
  }
}
car.getSpeed();
car.getSpeed2();


// Rest parameter:
const argumentLogger = (...params) => {
  for (var i = 0; i < params.length; i++) {
    console.log(params[i]);
  }
}
argumentLogger(1, 2, 3);

const restLogger = (a, b, ...restOfParameters) => {
  console.log(a);
  console.log(b);
  console.log(restOfParameters);
}
restLogger(12, 13, 14, 15, 16, 17, 18);
