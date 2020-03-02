const name = 'john';
const age = 23;

// var name -> key, var value -> value:
const student = {name, age};
console.log(student);


// assign computed property:
let id = 0;
const inventory = {
  [++id]: 'Apples',
  [++id]: 'Oranges'
};
console.log(inventory);

inventory[++id] = 'Kiwis';
console.log(inventory);

inventory[++id] = 'Bananas';
console.log(inventory);


// shorter syntax for defining method properties:
const car = {
  speed: 0,
  accelerate (amount) {
    this.speed += amount;
  },
  decelerate (amount) {
    this.speed -= amount;
  }
};

car.accelerate(10);
console.log(car.speed);

car.decelerate(3);
console.log(car.speed);
