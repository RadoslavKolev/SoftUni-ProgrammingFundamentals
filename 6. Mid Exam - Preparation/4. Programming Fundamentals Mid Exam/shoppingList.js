function shoppingList(input) {
  const groceries = input.shift().split('!');

  const urgent = (arr, item) => arr.unshift(item);

  const unnecessary = (arr, item) => {
    let index = arr.indexOf(item);
    arr.splice(index, 1);
  };

  const correct = (arr, oldItem, newItem) => {
    let index = arr.indexOf(oldItem);
    arr[index] = newItem;
  };

  const rearrange = (arr, item) => {
    let index = arr.indexOf(item);
    let removed = arr.splice(index, 1).join();
    arr.push(removed);
  };

  let i = 0;
  while (input[i] !== 'Go Shopping!') {
    let currentAction = input[i].split(' ');
    let command = currentAction[0];
    let item = currentAction[1];

    switch (command) {
      case 'Urgent':
        if(!groceries.includes(item)) {
          urgent(groceries, item);
        }
        break;
      case 'Unnecessary':
        if(groceries.includes(item)) {
          unnecessary(groceries, item);
        }
        break;
      case 'Correct':
        if(groceries.includes(item)) {
          let newItem = currentAction[2];
          correct(groceries, item, newItem);
        }
        break;
      case 'Rearrange':
        if(groceries.includes(item)) {
          rearrange(groceries, item);
        }
        break;
    }
    i++;
  }
  console.log(groceries.join(', '));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!"
]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!"
]);