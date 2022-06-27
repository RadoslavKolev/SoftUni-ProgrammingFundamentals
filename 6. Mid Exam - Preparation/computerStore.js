function computerStore(input) {
  let customerType = input.pop();
  let sum = 0;
  let taxes = 0;
  let total = 0;
  let message = '';
  let len = input.length;

  for (let i = 0; i < len; i++) {
    let currentPrice = Number(input[i]);
    if (currentPrice < 0) {
      console.log('Invalid price!');
      continue;
    }
    sum += currentPrice;
  }

  taxes = sum * 0.2;
  total = sum + taxes;

  if (customerType === 'special') {
    total -= total * 0.1;
  }

  if (total === 0) {
    message += 'Invalid order!';
  } else {
    message += "Congratulations you've just bought a new computer!\n";
    message += `Price without taxes: ${sum.toFixed(2)}$\n`;
    message += `Taxes: ${taxes.toFixed(2)}$\n`;
    message += "-----------\n";
    message += `Total price: ${total.toFixed(2)}$`;
  }
  console.log(message);
}

computerStore([
  '1023', 
  '15', 
  '-20',
  '-5.50',
  '450', 
  '20', 
  '17.66', 
  '19.30', 'regular'
  ]);

computerStore([
  'regular'
]);