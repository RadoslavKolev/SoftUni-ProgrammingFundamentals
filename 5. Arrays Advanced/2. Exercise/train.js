function train(input) {
  const wagons = input.shift().split(' ').map(Number);
  let maxCapacity = Number(input.shift());

  let inputLength = input.length;
  let wagonsLength = wagons.length;

  for (let i = 0; i < inputLength; i++) {
    let command = input[i].split(' ');
    
    if (command[0] === 'Add') {
      let passengersToAdd = Number(command[1]);
      wagons.push(passengersToAdd);
    } else {
      for (let j = 0; j < wagonsLength; j++) {
        let currentSum = Number(command[0]) + Number(wagons[j]);
        if (currentSum <= maxCapacity) {
          wagons[j] = currentSum;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75'
]);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);