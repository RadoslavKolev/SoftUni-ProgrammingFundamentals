function palindromeIntegers(numbers) {
  for (const elem of numbers) {
    let current = elem.toString();
    let reversed = elem.toString().split('').reverse().join('');

    if (current === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32, 2, 232, 1010]);