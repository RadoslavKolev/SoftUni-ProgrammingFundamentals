function computerStore(prices) {
  let price = 0;
  let taxes = 0;
  let totalPrice = 0;
  let message = '';

  let i = 0;
  while (prices[i] !== 'special') {
    if (prices[i] === 'regular') {
      break;
    }

    let currentPrice = Number(prices[i]);

    if (currentPrice < 0) {
      console.log('Invalid price!');
      i++;
      continue;
    }

    price += currentPrice;
    i++;
  }
  
  taxes = price * 0.2;
  totalPrice = price + taxes;

  if (prices[prices.length - 1] === 'special') {
    totalPrice -= totalPrice * 0.1;
  }

  if (totalPrice === 0) {
    message += 'Invalid order!';
  } else {
    message += "Congratulations you've just bought a new computer!\n";
    message += `Price without taxes: ${price.toFixed(2)}$\n`;
    message += `Taxes: ${taxes.toFixed(2)}$\n`;
    message += "-----------\n";
    message += `Total price: ${totalPrice.toFixed(2)}$`;
  }
  console.log(message);
}

computerStore([
  '1050',
  '200',
  '450',
  '2',
  '18.50',
  '16.86',
  'special'
]);

computerStore([
  '1023', 
  '15', 
  '-20',
  '-5.50',
  '450', 
  '20', 
  '17.66', 
  '19.30', 
  'regular'
]);

computerStore([
   'regular'
]);