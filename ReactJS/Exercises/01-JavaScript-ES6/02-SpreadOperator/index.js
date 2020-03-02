const friends = ['john', 'mary'];
const foes = ['steve', 'jane'];

const friendsAndFoes = [...friends, ...foes];
console.log(friendsAndFoes);

const splitString = [...'foobar'];
console.log(splitString);

const meat = {
  beef: '1kg',
  pork: '2kg'
}

const dairy = {
  cheese: '1kg',
  milk: '2lt'
}

const meatAndDairy = {...meat, ...dairy}
console.log(meatAndDairy);
