function manOWar(input) {
  const pirateShip = input.shift().split('>').map(Number);
  const warShip = input.shift().split('>').map(Number);
  const maxHealthCapacity = Number(input.shift());

  const fire = (arr, index, damage) => {
    arr[index] -= damage;
    if (arr[index] <= 0) {
      return true;
    } else {
      return false;
    }
  }

  const defend = (arr, start, end, damage) => {
    for (let i = start; i <= end; i++) {
      arr[i] -= damage;
      if (arr[i] <= 0) {
        return true;
      }
    }
    return false;
  };

  const repair = (arr, index, health) => {
    arr[index] += health;
    if (arr[index] > maxHealthCapacity) {
      arr[index] = maxHealthCapacity;
    }
  };

  const status = (arr) => {
    let range = maxHealthCapacity * 0.2;
    let sectionsForRepair = arr.filter(el => el < range);
    console.log(`${sectionsForRepair.length} sections need repair.`);
  };

  let i = 0;
  while (input[i] !== 'Retire') {
    let currentAction = input[i].split(' ');
    let command = currentAction[0];

    switch (command) {
      case 'Fire':
        let indexToFire = Number(currentAction[1]);
        if (indexToFire >= 0 && indexToFire < warShip.length) {
          let damage = Number(currentAction[2]);
          let isSank = fire(warShip, indexToFire, damage);
          if (isSank) {
            console.log("You won! The enemy ship has sunken.");
            return;
          }
        }
        break;
      case 'Defend':
        let startIndex = Number(currentAction[1]);
        let endIndex = Number(currentAction[2]);
        if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= 0 && endIndex < pirateShip.length)) {
          let damage = Number(currentAction[3]);
          let isSank = defend(pirateShip, startIndex, endIndex, damage);
          if (isSank) {
            console.log("You lost! The pirate ship has sunken.");
            return;
          }
        }
        break;
      case 'Repair':
        let indexToRepair = Number(currentAction[1]);
        if (indexToRepair >= 0 && indexToRepair < pirateShip.length) {
          let health = Number(currentAction[2]);
          repair(pirateShip, indexToRepair, health);
        }
        break;
      case 'Status':
        status(pirateShip);
        break;
      default:
        console.log('No such command!');
        break;
    }
    i++;
  }

  let pirateShipSum = pirateShip.reduce((total, section) => total + section);
  let warShipSum = warShip.reduce((total, section) => total + section);

  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warShipSum}`);
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"
]);

manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire"
]);