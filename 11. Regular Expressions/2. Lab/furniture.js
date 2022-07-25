function furniture(input) {
  const pattern = />>(?<furniture>[A-Z][a-zA-Z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/;
  let totalCost = 0;
  
  console.log('Bought furniture:');

  for (const item of input) {
    const validItem = pattern.exec(item);

    if (!validItem) continue;

    // We can destructure the groups:
    // let {furniture, price, quantity} = validItem.groups;

    const furniture = validItem.groups.furniture;
    const price = Number(validItem.groups.price);
    const quantity = Number(validItem.groups.quantity);

    const currentCost = price * quantity;
    totalCost += currentCost;

    console.log(furniture);
  }

  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

console.log('----------------------Test 1----------------------');
furniture([
  '>>Sofa<<312.23!3',
  '>>TV<<300!5',
  '>Invalid<<!5',
  'Purchase'
]);

/* 
  Bought furniture:
  Sofa
  TV
  Total money spend: 2436.69
*/

console.log('----------------------Test 2----------------------');
furniture([
  '>>Laptop<<312.2323!3',
  '>>TV<<300.21314!5',
  '>Invalid<<!5',
  '>>TV<<300.21314!20',
  '>>Invalid<!5',
  '>>TV<<30.21314!5',
  '>>Invalid<<!!5',
  'Purchase'
]);

/* 
  Bought furniture:
  Laptop
  TV
  TV
  TV
  Total money spend: 8593.09
*/

console.log('----------------------Test 3----------------------');
furniture([
  '>Invalid<<!4',
  '>Invalid<<!2',
  '>Invalid<<!5',
  'Purchase'
]);

/* 
  Bought furniture:
  Total money spend: 0.00
*/