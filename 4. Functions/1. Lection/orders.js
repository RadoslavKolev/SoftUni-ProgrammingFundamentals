function orders(product, quantity) {
  let total = 0;
  let price = 0;

  switch (product) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2.0;
      break;
    default:
      console.log(`no such product`);
      return;
  }

  total = quantity * price;
  console.log(total.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
