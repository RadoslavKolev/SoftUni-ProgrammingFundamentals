function simpleCalculator(a, b, operator) {
  let result = 0;
  switch(operator) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
    default:
      console.log(`No such operator`);
      return;
  }

  console.log(result);
}

simpleCalculator(5, 5, 'operator');
