function perfectNumber(num) {
  let sum = 0;
  let isPerfect = false;

  for (let i = 0; i < num; i++) {
    if (sum === num) {
      isPerfect = true;
      break;
    }

    if(sum > num) {
      break;
    }

    if (num % i === 0) {
      sum += i;
    }
  }

  if (isPerfect) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);