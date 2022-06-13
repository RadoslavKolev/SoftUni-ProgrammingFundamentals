function factorialDivision(a, b) {
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  return (factorial(a) / factorial(b)).toFixed(2);
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));