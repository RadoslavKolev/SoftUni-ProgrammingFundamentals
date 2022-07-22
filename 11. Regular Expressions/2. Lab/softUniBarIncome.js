function softUniBarIncome(input) {
  const pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[\d.]+)\$/;
  let total = 0;

  for (const elem of input) {
    if (elem === 'end of shift') {
      break;
    }

    const validItem = pattern.exec(elem);

    if (validItem) {
      let name = validItem.groups.name;
      let product = validItem.groups.product;
      let count = Number(validItem.groups.count);
      let price = Number(validItem.groups.price);
      let currentTotal = count * price;
      total += currentTotal;

      console.log(`${name}: ${product} - ${currentTotal.toFixed(2)}`);
    }    
  }

  console.log(`Total income: ${total.toFixed(2)}`);
}

console.log('----------------------Test 1----------------------');
softUniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'
]);

/* 
  George: Croissant -
  20.60
  Peter: Gum - 1.30
  Maria: Cola - 2.40
  Total income: 24.30
*/

console.log('----------------------Test 2----------------------');
softUniBarIncome([
  '%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift'
]);

/* 
  Valid: Valid - 200.00
  Total income: 200.00
*/