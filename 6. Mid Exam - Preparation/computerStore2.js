function computerStore(prices) {
  let price = 0;
  let taxes = 0;
  let totalPrice = 0;

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
  
  taxes = 0.2 * price;
  totalPrice = price + taxes;

  if (prices[prices.length - 1] === 'special') {
    totalPrice = totalPrice - (totalPrice * 0.1);
  }

  if (totalPrice === 0) {
    console.log('Invalid order!');
  } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}

// computerStore([
//   '1050',
//   '200',
//   '450',
//   '2',
//   '18.50',
//   '16.86',
//   'special'
// ]);

// computerStore([
//   '1023', 
//   '15', 
//   '-20',
//   '-5.50',
//   '450', 
//   '20', 
//   '17.66', 
//   '19.30', 
//   'regular'
// ]);

computerStore([
   'regular'
]);