function spiceMustFlow(startingYield) {
  const WORKERS_CONSUMATION = 26;
  let totalSpice = 0;
  let days = 0;

  while (startingYield >= 100) {
    days++;
    totalSpice += startingYield - WORKERS_CONSUMATION;
    startingYield -= 10;
  }

  totalSpice -= WORKERS_CONSUMATION;

  if (totalSpice < 0) {
    totalSpice = 0;
  }
  console.log(days);
  console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);
