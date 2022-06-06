function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let sumToString = sum.toString();
  let isFloat = false;

  for (let digit of sumToString) {
    if (digit === '.') {
      isFloat = true;
      break;
    }
  }

  if (isFloat) {
    sumToString += ' - Float';
  } else {
    sumToString += ' - Integer';
  }

  console.log(sumToString);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
