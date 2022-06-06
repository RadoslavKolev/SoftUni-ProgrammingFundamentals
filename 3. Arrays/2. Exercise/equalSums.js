function equalSums(arr) {
  let len = arr.length;
  let flag = false;

  for (let i = 0; i < len; i++) {
    if (len === 1) {
      console.log(0);
      return;
    }
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (let j = len - 1; j > i; j--) {
      rightSum += arr[j];
    }
    if (rightSum === leftSum) {
      console.log(i);
      flag = true;
      break;
    }
  }

  if (!flag) {
    console.log("no");
  }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
