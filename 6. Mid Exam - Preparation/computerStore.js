function computerStore(input) {
  let customerType = input.pop();
  let len = input.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    let currentPrice = Number(input[i]);
    if (currentPrice < 0) {
      console.log('Invalid price!');
      continue;
    }
    sum += currentPrice;
  }

  let taxes = 0.2 * sum;
  let total = sum + taxes;

  if (customerType === 'special') {
    total = total - (total * 10 / 100);
  }

  if (total === 0) {
    console.log('Invalid order!');
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);
  }
}

// computerStore([
//   '1023', 
//   '15', 
//   '-20',
//   '-5.50',
//   '450', 
//   '20', 
//   '17.66', 
//   '19.30', 'regular'
//   ]);
computerStore([
  'regular'
]);