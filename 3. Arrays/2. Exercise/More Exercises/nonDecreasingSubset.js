function nonDecreasingSubset(arr) {
  let biggestNum = 0;
  let len = arr.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (arr[i] >= biggestNum) {
      biggestNum = arr[i];
      result.push(biggestNum);
    }
  }
  console.log(result.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([2]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
