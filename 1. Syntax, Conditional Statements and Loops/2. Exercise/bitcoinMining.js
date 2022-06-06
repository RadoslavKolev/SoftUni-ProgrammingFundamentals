function bitcoinMining(goldAmount) {
  const BITCOIN_PRICE = 11949.16;
  const GOLD_PRICE = 67.51;

  let total = 0;
  let bitcoins = 0;
  let moneyLeft = 0;
  let day = 0;
  let firstBought = 0;
  let flag = false;

  for (let gold of goldAmount) {
    day++;

    if (day % 3 === 0) {
      gold = gold - (gold * 30 / 100);
    }

    let goldExchange = gold * GOLD_PRICE;
    total += goldExchange;

    if (total >= BITCOIN_PRICE) {
      if (flag) {
        continue;
      } else {
        firstBought = day;
        flag = true;
      }
    }
  }
  
  bitcoins = Math.floor(total / BITCOIN_PRICE);
  moneyLeft = (total - (bitcoins * BITCOIN_PRICE)).toFixed(2);

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (flag) {
    console.log(`Day of the first purchased bitcoin: ${firstBought}`);
  }
  console.log(`Left money: ${moneyLeft} lv.`);
}

bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);