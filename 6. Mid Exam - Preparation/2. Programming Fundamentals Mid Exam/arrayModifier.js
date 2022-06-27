function arrayModifier(input) {
  // Functions to do the job
  const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  const multiply = (arr, index1, index2) => arr[index1] *= arr[index2];
  const decrease = arr => arr.map(elem => elem - 1);

  // Initial array to work with
  let sequence = input.shift().split(' ').map(Number);
  
  let i = 0;
  while (input[i] !== 'end') {
    let currentAction = input[i].split(' ');
    let command = currentAction.shift();
    let index1, index2;

    if (command !== 'decrease') {
      index1 = Number(currentAction[0]);
      index2 = Number(currentAction[1]);
    }

    switch (command) {
      case 'swap':
        swap(sequence, index1, index2);
        break;
      case 'multiply':
        multiply(sequence, index1, index2);
        break;
      case 'decrease':
        sequence = decrease(sequence);
        break;
      default:
        console.log('No such command!');
        break;
    }
    i++;
  }
  console.log(sequence.join(', '));
}

arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]);

arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]);