function arrayManipulatior(numbers, commands) {
  let add = (arr, index, element) => arr.splice(index, 0, element);

  let addMany = (arr, index, elements) => {
    for (const elem of elements) {
      arr.splice(index++, 0, elem);
    }
  }

  let contains = (arr, element) => {
    if (arr.includes(element)) {
      console.log(arr.indexOf(element));
    } else {
      console.log(-1);
    }
  }

  let remove = (arr, index) => arr.splice(index, 1);

  let shift = (arr, positions) => {
    for (let i = 0; i < positions; i++) {
      let currentElement = arr.shift();
      arr.push(currentElement);
    }
  }

  let sumPairs = (arr) => {
    let summedArr = [];
    for (let i = 0, j = 1; i < arr.length || j < arr.length; i += 2, j += 2) {
      if (j >= arr.length || i >= arr.length) {
        summedArr.push(arr[arr.length - 1]);
        break;
      }
      let currentSum = arr[i] + arr[j];
      summedArr.push(currentSum);
      currentSum = 0;
    }
    return summedArr;
  }

  let print = (arr) => {
    let arrToStr = arr.join(', ');
    let output = '[ ' + arrToStr + ' ]';
    console.log(output);
  }

  for (let i = 0; i < commands.length; i++) {
    let currentCommandArr = commands[i].split(' ');
    let currentCommand = currentCommandArr[0];

    switch (currentCommand) {
      case 'add':
        let indexAdd = Number(currentCommandArr[1]);
        let elementToAdd = Number(currentCommandArr[2]);
        add(numbers, indexAdd, elementToAdd);
        break;
      case 'addMany':
        let indexAddMany = Number(currentCommandArr[1]);
        let elements = [];
        for (let j = 2; j < currentCommandArr.length; j++) {
          elements.push(Number(currentCommandArr[j]));
        }
        addMany(numbers, indexAddMany, elements);
        break;
      case 'contains':
        let elementToCheck = Number(currentCommandArr[1]);
        contains(numbers, elementToCheck);
        break;
      case 'remove':
        let indexToRemove = Number(currentCommandArr[1]);
        remove(numbers, indexToRemove);
        break;
      case 'shift':
        let positions = Number(currentCommandArr[1]);
        shift(numbers, positions);
        break;
      case 'sumPairs':
        numbers = sumPairs(numbers);
        break;
      case 'print':
        print(numbers);
        break;
      default:
        console.log('No such command');
        return;
    }
  }
}

// arrayManipulatior([1, 2, 4, 5, 6, 7],
//   ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrayManipulatior([1, 2, 3, 4, 5],
//   ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
//     'shift 1', 'print'
//   ]);

arrayManipulatior([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);