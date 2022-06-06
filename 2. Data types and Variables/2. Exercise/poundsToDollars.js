function poundsToDollars(pounds) {
  const POUND = 1.31;
  let dollars = (pounds * POUND).toFixed(3);
  console.log(dollars);
}

poundsToDollars(80);
poundsToDollars(39);
