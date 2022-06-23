function shootForTheWin(input) {
  let sequence = input.shift().split(' ').map(Number);
  let count = 0;
  let shotTargets = 0;

  while (input[count] !== 'End') {
    let currentIndex = Number(input[count]);

    if (currentIndex < 0 || currentIndex >= sequence.length) {
      count++;
      continue;
    }

    let currentValue = sequence[currentIndex];
    if (currentValue !== -1) {
      sequence[currentIndex] = -1;
      shotTargets++;
    }

    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] === -1) {
        continue;
      }
      if (sequence[i] > currentValue) {
        sequence[i] -= currentValue;
      } else {
        sequence[i] += currentValue;
      }
    }
    count++;
  }
  console.log(`Shot targets: ${shotTargets} -> ${sequence.join(' ')}`);
}

shootForTheWin(["24 50 36 70",
  "0",
  "4",
  "3",
  "1",
  "End"
]);

shootForTheWin(["30 30 12 60 54 66",
  "5",
  "2",
  "4",
  "0",
  "End"
]);