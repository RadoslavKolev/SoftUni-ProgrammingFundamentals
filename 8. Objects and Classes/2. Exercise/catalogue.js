function catalogue(input) {
  const catalogue = {};

  for (const elem of input) {
    const [name, price] = elem.split(' : ');
    catalogue[name] = price;
  }

  const sortedKeys = Object.keys(catalogue)
    .sort((a, b) => a.localeCompare(b));

  let previousProduct = '';

  for (const product of sortedKeys) {
    if (!product.startsWith(previousProduct[0])) {
      console.log(product[0]);
    }

    previousProduct = product;
    console.log(`  ${product}: ${catalogue[product]}`);
  }
}

console.log('------------------Test 1------------------');
catalogue([
  'Apricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15 ',
  'T-Shirt : 10'
]);

/* 
  A
    Anti-Bug Spray: 15
    Apple: 1.25
    Appricot: 20.4
  B
    Boiler: 300
  D
    Deodorant: 10
  F
    Fridge: 1500
  T
    T-Shirt: 10
    TV: 1499
*/

console.log('------------------Test 2------------------');
catalogue([
  'Omlet : 5.4',
  'Shirt : 15',
  'Cake : 59'
]);

/* 
  C
    Cake: 59
  O
    Omlet: 5.4
  S
    Shirt: 15
*/
