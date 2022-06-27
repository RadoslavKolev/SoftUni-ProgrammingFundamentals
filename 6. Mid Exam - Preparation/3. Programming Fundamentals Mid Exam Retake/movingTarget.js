function movingTarget(input) {
  const sequence = input.shift().split(' ').map(Number);

  const shoot = (arr, index, power) => {
    arr[index] -= power;
    if (arr[index] <= 0) {
      arr.splice(index, 1);
    }
  };

  const add = (arr, index, value) => {
    arr.splice(index, 0, value);
  };

  const strike = (arr, index, radius) => {
    let startIndex = index - radius;
    let endIndex = index + radius;
    if (startIndex < 0 || endIndex >= arr.length) {
      console.log('Strike missed!');
      return;
    }
    
    let count = radius * 2 + 1;
    arr.splice(startIndex, count);
  }

  let i = 0;
  while (input[i] !== 'End') {
    let currentAction = input[i].split(' ');
    let command = currentAction[0];
    let index = Number(currentAction[1]);

    switch (command) {
      case 'Shoot':
        if (index >= 0 && index < sequence.length) {
          let power = Number(currentAction[2]);
          shoot(sequence, index, power);
        }
        break;
      case 'Add':
        if (index >= 0 && index < sequence.length) {
          let value = Number(currentAction[2]);
          add(sequence, index, value);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case 'Strike':
        let radius = Number(currentAction[2]);
        strike(sequence, index, radius);
        break;
    }
    i++;
  }
  console.log(sequence.join('|'));
}

movingTarget(["52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End"
]);

movingTarget(["1 2 3 4 5",
  "Strike 0 1",
  "End"
]);