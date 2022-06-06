function triangleOfNumbers(n) {
  let text = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      text += i + ' ';
    }
    text += '\n';
  }
  console.log(text);
}

triangleOfNumbers(6);