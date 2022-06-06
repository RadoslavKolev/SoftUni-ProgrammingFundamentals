function sumFirstAndLastArrayElements(numbers) {
  let first = numbers[0];
  let last = numbers[numbers.length - 1];
  let sum = first + last;
  console.log(sum);
}

sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);

