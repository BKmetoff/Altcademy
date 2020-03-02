const friends = ['john', 'steve', 'mark'];
friends.forEach((name, i) => {
  console.log(`friend ${i + 1} is ${name}`);
});


const items = [
  {name: 'milk', quantity: 10},
  {name: 'yogurt', quantity: 3},
  {name: 'eggs', quantity: 6},
];

const inventory = {};

items.forEach((item, index) => {
  inventory[`id-${index}`] = item;
});

console.log(inventory);

const price = 10;
const sentence = `blabla ${10*5-5}`;

console.log(sentence);
