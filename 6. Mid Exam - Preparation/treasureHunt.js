function treasureHunt(input) {
  let chest = input.shift().split('|');

  let i = 0;
  while (input[i] !== 'Yohoho!') {
    let currentAction = input[i].split(' ');
    let currentCommand = currentAction.shift();

    let loot = (arr, treasure) => {
      for (let item of treasure) {
        if (!arr.includes(item)) {
          arr.unshift(item);
        }
      }
    }

    let drop = (arr, index) => {
      let itemToRemove = arr.splice(index, 1).toString();
      arr.push(itemToRemove);
    }

    let steal = (arr, count) => {
      let stolenItems = arr.splice(-count);
      console.log(stolenItems.join(', '));
    }

    switch (currentCommand) {
      case 'Loot':
        let treasure = [...currentAction];
        loot(chest, treasure);
        break;
      case 'Drop':
        let indexToDrop = Number(currentAction[0]);
        if (indexToDrop < 0 || indexToDrop >= chest.length) {
          i++;
          continue;
        }
        drop(chest, indexToDrop);
        break;
      case 'Steal':
        let count = Number(currentAction[0]);
        steal(chest, count);
        break;
      default:
        console.log('No such command!');
        i++;
        continue;
    }
    i++;
  }

  let sum = 0;
  let averageGain = 0;

  for (const item of chest) {
    sum += Number(item.length);
  }
  
  averageGain = (sum / chest.length).toFixed(2);

  if (chest.length === 0) {
    console.log('Failed treasure hunt.');
  } else {
    console.log(`Average treasure gain: ${averageGain} pirate credits.`);
  }
}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//   "Loot Wood Gold Coins",
//   "Loot Silver Pistol",
//   "Drop 3",
//   "Steal 3",
//   "Yohoho!"
// ]);

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!"
]);