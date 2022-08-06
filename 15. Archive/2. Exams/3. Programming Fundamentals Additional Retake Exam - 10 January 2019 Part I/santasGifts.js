function santasGifts(input) {
  const commands = Number(input.shift());
  const houses = input.shift().split(' ').map(Number);
  let currentStep = 0;

  for (let i = 0; i < commands; i++) {
    const [command, ...rest] = input[i].split(' ');

    switch (command) {
      case 'Forward':
        const stepsForward = Number(rest[0]);

        if (currentStep + stepsForward >= houses.length) continue;

        currentStep += stepsForward;
        houses.splice(currentStep, 1);
        break;
      case 'Back':
        const stepsBack = Number(rest[0]);

        if (currentStep - stepsBack < 0) continue;

        currentStep -= stepsBack;
        houses.splice(currentStep, 1);
        break;
      case 'Gift':
        const index = Number(rest[0]);

        if (index < 0 || index >= houses.length) continue;

        const houseNumber = Number(rest[1]);
        houses.splice(index, 0, houseNumber);
        currentStep = index;
        break;
      case 'Swap':
        const houseA = Number(rest[0]);
        const houseB = Number(rest[1]);

        if (!houses.includes(houseA) || !houses.includes(houseB)) continue;

        const indexA = houses.indexOf(houseA);
        const indexB = houses.indexOf(houseB);
        houses[indexA] = houseB;
        houses[indexB] = houseA;
        break;
      default:
        console.log('No such command!');
        continue;
    }
  }

  console.log(`Position: ${currentStep}`);
  console.log(houses.join(', '));
}

console.log('------------- Test 1 -------------');
santasGifts([
  '5',
  '255 500 54 78 98 24 30 47 69 58',
  'Forward 1',
  'Swap 54 47',
  'Gift 1 20',
  'Back 1',
  'Forward 3'
]);

/* 
  Position: 3
  20, 47, 78, 24, 30, 54, 69, 58
*/

console.log('------------- Test 2 -------------');
santasGifts([
  '6',
  '50 40 25 63 78 54 66 77 24 87',
  'Forward 4',
  'Back 3',
  'Forward 3',
  'Gift 2 88',
  'Swap 50 87',
  'Forward 1',
]);

/* 
  Position: 3
  87, 25, 88, 54, 77, 24, 50
*/