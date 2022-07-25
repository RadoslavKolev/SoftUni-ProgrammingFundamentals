function storeProvision(currentStocks, orderedStocks) {
  const productsObj = {};
  const currentStocksLen = currentStocks.length;
  const orderedStocksLen = orderedStocks.length;

  for (let i = 0; i < currentStocksLen; i += 2) {
    const stockName = currentStocks[i];
    const quantity = Number(currentStocks[i + 1]);
    productsObj[stockName] = quantity;
  }

  for (let i = 0; i < orderedStocksLen; i += 2) {
    const stockName = orderedStocks[i];
    const quantity = Number(orderedStocks[i + 1]);

    if (currentStocks.includes(stockName)) {
      productsObj[stockName] += quantity;
    } else {
      productsObj[stockName] = quantity;
    }
  }

  for (const product of Object.keys(productsObj)) {
    console.log(`${product} -> ${productsObj[product]}`);
  }
}

console.log('------------------Test 1------------------');
storeProvision(
  [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
  ],
  [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
  ]
);

/* 
  Chips -> 5
  CocaCola -> 9
  Bananas -> 44
  Pasta -> 11
  Beer -> 2
  Flour -> 44
  Oil -> 12
  Tomatoes -> 70
*/

console.log('------------------Test 2------------------');
storeProvision(
  [
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 
    'Water', '4', 'Juice', '5'
  ],
  [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 
    'Tomatoes', '7', 'Bananas', '30'
  ]  
);

/* 
  Salt -> 2
  Fanta -> 4
  Apple -> 21
  Water -> 4
  Juice -> 5
  Sugar -> 44
  Oil -> 12
  Tomatoes -> 7
  Bananas -> 30
*/

