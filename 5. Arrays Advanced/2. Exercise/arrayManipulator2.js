function arrManipulation(array, commands) {
  for (let index = 0; index < commands.length; index++) {
    const element = commands[index];
    let splitCommand = element.split(' ');
    let command = splitCommand.shift();

    switch (command) {
      case "add":
        array.splice(Number(splitCommand[0]), 0, Number(splitCommand[1]));
        break;

      case "addMany":
        let start = splitCommand.shift();
        let elements = splitCommand.map(Number)
        array.splice(start, 0, ...elements);
        break;

      case "contains":
        let check = Number(splitCommand[0]);
        console.log(array.indexOf(check));
        break;

      case "remove":
        array.splice(Number(splitCommand[0]), 1);
        break;

      case "shift":
        let cut = Number(splitCommand[0]);
        for (let index = 0; index < cut; index++) {
          let number = array.shift();
          array.push(number);
        }

        break;

      case "sumPairs":
        for (let index = 0; index < array.length; index++) {
          array[index] += Number(array.splice(index + 1, 1));

        }
        break;

      case "print":
        console.log(`[ ${array.join(", ")} ]`);
        break;

    }
  }
}

arrManipulation([1, 2, 4, 5, 6, 7],
  ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrManipulation([1, 2, 3, 4, 5],
//   ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
//     'shift 1', 'print'
//   ]);

// arrManipulation([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);