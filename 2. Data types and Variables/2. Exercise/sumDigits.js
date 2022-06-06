function sumDigits(num) {
  let sum = 0;
  let numToString = num.toString();

  for (const digit of numToString) {
    sum += Number(digit);
  }

  console.log(sum);
}

sumDigits(245678);