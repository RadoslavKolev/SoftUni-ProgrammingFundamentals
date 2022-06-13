function palindromeIntegers(numbers) {
  let len = numbers.length;

  for (let i = 0; i < len; i++) {
    let currentNumber = numbers[i].toString();
    let numberLen = currentNumber.length;
    let mid = Math.floor(numberLen / 2);
    let isPalindrome = true;

    for (let j = 0; j < mid; j++) {
      if (currentNumber[j] !== currentNumber[numberLen - 1 - j]) {
        isPalindrome = false;
        console.log('false');
        break;
      }
    }
    if (isPalindrome) {
      console.log('true');
    }
  }
}

// palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);