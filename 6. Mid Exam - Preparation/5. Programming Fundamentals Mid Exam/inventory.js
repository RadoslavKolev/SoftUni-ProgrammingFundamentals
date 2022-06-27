function inventory(input) {
  const journal = input.shift().split(', ');

  const collect = (arr, item) => arr.push(item);

  const drop = (arr, item) => {
    let index = arr.indexOf(item);
    arr.splice(index, 1);
  };

  const combineItems = (arr, oldItem, newItem) => {
    let index = arr.indexOf(oldItem);
    arr.splice(index + 1, 0, newItem);
  };

  const renew = (arr, item) => {
    let index = arr.indexOf(item);
    arr.splice(index, 1);
    arr.push(item);
  };

  let i = 0;
  while (input[i] !== 'Craft!') {
    let currentAction = input[i].split(' - ');
    let action = currentAction[0];
    let item = '';

    if (action !== 'Combine Items') {
      item = currentAction[1];
    }

    switch (action) {
      case 'Collect':
        if (!journal.includes(item)) {
          collect(journal, item);
        }
        break;
      case 'Drop':
        if (journal.includes(item)) {
          drop(journal, item);
        }
        break;
      case 'Combine Items':
        let items = currentAction[1].split(":");
        let oldItem = items[0];
        if (journal.includes(oldItem)) {
          let newItem = items[1];
          combineItems(journal, oldItem, newItem);
        }
        break;
      case 'Renew':
        if (journal.includes(item)) {
          renew(journal, item);
        }
        break;
    }

    i++;
  }
  console.log(journal.join(', '));
}

// inventory([
//   'Iron, Wood, Sword',
//   'Collect - Gold',
//   'Drop - Wood',
//   'Craft!'
// ]);

inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]);