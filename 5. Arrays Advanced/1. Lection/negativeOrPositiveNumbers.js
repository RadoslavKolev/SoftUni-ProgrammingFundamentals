function negativeOrPositiveNumbers(arr) {
  const result = [];

  for (const elem of arr) {
    if (elem < 0) {
      result.unshift(elem);
    } else {
      result.push(elem);
    }
  }

  console.log(result.join("\n"));
}

// negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);