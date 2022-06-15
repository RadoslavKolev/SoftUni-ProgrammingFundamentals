function smallestTwoNumbers(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const smallestNumbers = sortedArr.slice(0, 2);
  console.log(smallestNumbers.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);