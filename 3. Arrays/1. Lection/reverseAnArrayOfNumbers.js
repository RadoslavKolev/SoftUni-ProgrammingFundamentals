function reverseAnArrayOfNumbers(n, numbers) {
  const newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(numbers[i]);
  }

  newArr.reverse();
  console.log(newArr.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5] );
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
