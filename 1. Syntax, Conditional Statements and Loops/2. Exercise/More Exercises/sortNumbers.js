function sortNumbers(a, b, c) {
  const myArray = [a, b, c];
  myArray.sort((a, b) => b - a);

  for (const num of myArray) {
    console.log(num);
  }
}

sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(0, 0, 2);