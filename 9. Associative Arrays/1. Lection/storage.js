function storage(input) {
  let items = new Map();

  input.forEach(elem => {
    let [item, quantity] = elem.split(' ');
    quantity = Number(quantity);

    if (items.has(item)) {
      let oldQuantity = items.get(item);
      let newQuantity = oldQuantity + quantity;
      items.set(item, newQuantity);
    } else {
      items.set(item, quantity);
    }
  });

  for (const elem of items) {
    console.log(`${elem[0]} -> ${elem[1]}`);
  }
}

// Test 1
console.log('\n----------------------------Test 1----------------------------\n');

storage([
  'tomatoes 10',
  'coffee 5',
  'olives 100',
  'coffee 40'
]);

/* Results:
  tomatoes -> 10
  coffee -> 45
  olives -> 100
*/

// Test 2
console.log('\n----------------------------Test 2----------------------------\n');

storage([
  'apple 50',
  'apple 61',
  'coffee 115',
  'coffee 40'
]);

/* Results:
  apple -> 111
  coffee -> 155
*/