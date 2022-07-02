function catalogue(input) {
  const catalogue = {};

  for (const elem of input) {
    let [name, price] = elem.split(' : ');
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

catalogue([
  'Apricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15 ',
  'T-Shirt : 10'
])