function processOddNumbers(arr) {
  const filteredArr = arr.filter((num, i) => i % 2 === 1);
  const mappedArr = filteredArr.map(num => num * 2);
  const reversedArr = mappedArr.reverse();

  console.log(reversedArr.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);