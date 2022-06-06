function amazingNumbers(num) {
  let sum = 0;
  let numToString = num.toString();

  for (const digit of numToString) {
    sum += Number(digit);
  }

  let isAmazing = sum.toString().includes("9");

  if (isAmazing) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

amazingNumbers(1233);
amazingNumbers(999);
