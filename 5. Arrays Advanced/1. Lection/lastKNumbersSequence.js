function lastKNumbersSequence(n, k) {
  const result = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;
    const currentSequence = result.slice(-k);
    for (const elem of currentSequence) {
      sum += elem;
    }

    result.push(sum);
  }

  console.log(result.join(" "));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);