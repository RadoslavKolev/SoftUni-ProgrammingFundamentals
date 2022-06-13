function smallestOfThreeNumbers(a, b, c) {
  const numArr = [a, b, c];
  let min = Number.MAX_SAFE_INTEGER;

  for (const elem of numArr) {
    if (elem < min) {
      min = elem;
    }
  }

  return min;
}

console.log(smallestOfThreeNumbers(2,5,3));