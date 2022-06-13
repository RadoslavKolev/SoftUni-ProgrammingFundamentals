function addAndSubtract(a, b, c) {
  let sum = ((first, second) => first + second)(a, b);
  let subtract = ((sumResult, third) => sumResult - third)(sum, c);

  return subtract;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));