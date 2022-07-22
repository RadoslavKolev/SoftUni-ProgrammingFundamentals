function furniture(input) {
  const pattern = />>(?<furniture>[A-Z][a-zA-Z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/;
  let total = 0;
  
  console.log('Bought furniture:');

  for (const item of input) {
    const validItem = pattern.exec(item);

    if (validItem === null) {
      continue;
    }

    const furniture = validItem.groups.furniture;
    console.log(furniture);

    const currentTotal = Number(validItem.groups.price) * Number(validItem.groups.quantity);
    total += currentTotal;
  }

  console.log(`Total money spend: ${total.toFixed(2)}`);
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

console.log('----------------------Test 3---------------------- :)))))))');
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