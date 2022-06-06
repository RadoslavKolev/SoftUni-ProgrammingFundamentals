function condenseArrayToNumber(numbers) {
  let condensed = [];

  // Copy of numbers array
  for (const num of numbers) {
    condensed.push(num);
  }

  // While the elements of result are more than 1
  while (condensed.length > 1) {
    let tempArr = [];
    // doesn't iterate over the last element
    for (let i = 0; i < condensed.length - 1; i++) {
      tempArr[i] = condensed[i] + condensed[i + 1];
    }
    condensed = tempArr;
  }
  console.log(condensed.toString());
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
