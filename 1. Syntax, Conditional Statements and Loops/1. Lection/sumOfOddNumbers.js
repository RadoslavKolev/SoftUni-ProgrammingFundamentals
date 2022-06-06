function sumOfOddNumbers(n) {
  let sum = 0;
  let oddNum = 1;
  
  for (let i = 1; i <= n; i++) {
    console.log(oddNum)
    sum += oddNum;
    oddNum += 2;
  }

  console.log(`Sum: ${sum}`);
}

// sumOfOddNumbers(5);
sumOfOddNumbers(3);