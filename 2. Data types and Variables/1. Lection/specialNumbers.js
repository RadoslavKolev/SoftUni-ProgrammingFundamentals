function specialNumbers(range) {
  for (let i = 1; i <= range; i++) {
    let sum = 0;
    let numToString = i.toString();

    for (const digit of numToString) {
      sum += Number(digit);
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15);
