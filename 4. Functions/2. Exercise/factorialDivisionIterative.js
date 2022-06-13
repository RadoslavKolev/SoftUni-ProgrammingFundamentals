function factorialDivision(a, b) {
  let resultA = 1;
  let resultB = 1;

  for (let i = 1; i <= a; i++) {
    resultA *= i;
  }
  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }

  let result = (resultA / resultB).toFixed(2);
  console.log(result);
}