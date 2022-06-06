function specialNumbers(range) {
  for (let i = 1; i <= range; i++) {
    let sum = 0;
    let tempNum = i;

    while (tempNum > 0) {
      let lastDigit = tempNum % 10;
      sum += lastDigit;
      tempNum = parseInt(tempNum / 10);
    }

    let isSpecial = '';
    if (sum === 5 || sum === 7 || sum === 11) {
      isSpecial = 'True';
    } else {
      isSpecial = 'False';
    }

    console.log(`${i} -> ${isSpecial}`);
  }
}

specialNumbers(15);