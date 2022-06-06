function addAndSubtract(arr) {
  let originalSum = 0;
  let newSum = 0;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    originalSum += arr[i];

    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }

    newSum += arr[i];
  }

  console.log(arr);
  console.log(originalSum);
  console.log(newSum);
}

// addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
