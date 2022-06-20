function houseParty(input) {
  const list = [];

  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(' ');
    let name = command[0];
    let commandLength = command.length;

    if (commandLength === 3) {
      if (!list.includes(name)) {
        list.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (list.includes(name)) {
        let index = list.indexOf(name);
        list.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(list.join('\n'));
}

houseParty(['Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!'
]);

houseParty(['Tom is going!',
  'Annie is going!',
  'Tom is going!',
  'Garry is going!',
  'Jerry is going!'
]);