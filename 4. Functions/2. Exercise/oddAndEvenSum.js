function oddAndEvenSum(num) {
  let numStr = num.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (const num of numStr) {
    let currentNumber = Number(num);
    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }

  let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

  return result;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));