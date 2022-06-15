function sumFirstAndLast(numbers) {
  let first = Number(numbers[0]);
  let last = Number(numbers[numbers.length - 1]);

  let result = first + last;
  console.log(result);
}

sumFirstAndLast(['20', '30', '40']);