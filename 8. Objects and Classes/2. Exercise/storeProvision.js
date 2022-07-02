function storeProvision(currentStocks, orderedStocks) {
  const productsObj = {};
  let currentStocksLen = currentStocks.length;
  let orderedStocksLen = orderedStocks.length;

  for (let i = 0; i < currentStocksLen; i += 2) {
    let stockName = currentStocks[i];
    let quantity = Number(currentStocks[i + 1]);
    productsObj[stockName] = quantity;
  }

  for (let i = 0; i < orderedStocksLen; i += 2) {
    let stockName = orderedStocks[i];
    let quantity = Number(orderedStocks[i + 1]);

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