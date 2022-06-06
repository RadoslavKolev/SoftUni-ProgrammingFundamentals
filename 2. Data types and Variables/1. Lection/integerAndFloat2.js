function integerAndFloat(a, b, c) {
  let sum = a + b + c;
  let result = Number.isInteger(sum) ? ' - Integer' : ' - Float';
  console.log(sum + result);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);