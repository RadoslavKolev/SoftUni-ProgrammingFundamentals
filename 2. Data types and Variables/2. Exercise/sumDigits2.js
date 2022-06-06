function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    sum += lastDigit;
    num = parseInt(num / 10);
  }

  console.log(sum);
}

sumDigits(245678);