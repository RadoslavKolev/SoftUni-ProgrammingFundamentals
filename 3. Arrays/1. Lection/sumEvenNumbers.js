function sumEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let evenSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    }
  }

  console.log(evenSum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
