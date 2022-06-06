function printAndSum(start, end) {
  let sum = 0;
  let text = '';

  for (let i = start; i <= end; i++) {
    text += i + ' ';
    sum += i;
  }

  console.log(text);
  console.log(`Sum: ${sum}`);
}

// printAndSum(5, 10);
// printAndSum(0, 26);
printAndSum(50, 60);