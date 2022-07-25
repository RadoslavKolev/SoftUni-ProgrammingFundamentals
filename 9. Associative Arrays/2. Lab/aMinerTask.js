function aMinerTask(input) {
  const items = {};

  while (input.length !== 0) {
    const resource = input.shift();
    const quantity = Number(input.shift());

    if (!items.hasOwnProperty(resource)) {
      items[resource] = quantity;
    } else {
      items[resource] += quantity;
    }
  }

  const entries = Object.entries(items);

  for (const [resource, quantity] of entries) {
    console.log(`${resource} -> ${quantity}`);
  }
}

console.log('---------------------- Test 1  ----------------------');
aMinerTask([
  'Gold',
  '155',
  'Silver',
  '10',
  'Copper',
  '17'
]);

/* 
  Gold -> 155
  Silver -> 10
  Copper -> 17
*/

console.log('---------------------- Test 2  ----------------------');
aMinerTask([
  'gold',
  '155',
  'silver',
  '10',
  'copper',
  '17',
  'gold',
  '15'
]);

/* 
  gold -> 170
  silver -> 10
  copper -> 17
*/