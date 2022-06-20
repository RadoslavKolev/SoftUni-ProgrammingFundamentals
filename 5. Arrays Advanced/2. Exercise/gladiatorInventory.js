function gladiatorInventory(input) {
  let inventory = input.shift().split(' ');

  let buy = (arr, item) => arr.push(item);

  let trash = (arr, item) => {
    let indexToRemove = arr.indexOf(item);
    arr.splice(indexToRemove, 1);
  }

  let repair = (arr, item) => {
    let indexToRepair = arr.indexOf(item);
    let itemToRepair = arr.splice(indexToRepair, 1);
    arr.push(itemToRepair);
  }

  let upgrade = (arr, item, update) => {
    let indexToFind = arr.indexOf(item);
    arr.splice(indexToFind + 1, 0, `${item}:${update}`);
  }

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i].split(' ');
    let command = currentElement[0];
    let item = currentElement[1];

    switch (command) {
      case 'Buy':
        if (!inventory.includes(item)) {
          buy(inventory, item);
        }
        break;
      case 'Trash':
        if (inventory.includes(item)) {
          trash(inventory, item);
        }
        break;
      case 'Repair':
        if (inventory.includes(item)) {
          repair(inventory, item);
        }
        break;
      case 'Upgrade':
        let equipmentArray = item.split('-');
        let [equipment, update] = equipmentArray;
        if (inventory.includes(equipment)) {
          upgrade(inventory, equipment, update);
        }
        break;
      default:
        console.log('No such command');
        return;
    }
  }

  console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade SWORD-Steel'
]);

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'
]);