function starEnigma(input) {
  const messages = Number(input.shift());
  const letters = ['s', 't', 'a', 'r'];
  const attackedPlanets = [];
  const destroyedPlanets = [];

  const decryptedPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[A|D])![^@\-!:>]*\->(?<soldiers>\d+)/;

  for (let i = 0; i < messages; i++) {
    let currentMessage = input[i];
    let occurrences = 0;

    currentMessage
      .toLowerCase()
      .split('')
      .forEach(letter => {
        if (letters.includes(letter)) {
          occurrences++;
        }
      });

    let decryptedMessage = currentMessage
      .split('')
      .map(letter => String.fromCharCode(letter.charCodeAt() - occurrences))
      .join('');

    const validMessage = decryptedPattern.exec(decryptedMessage);

    if (validMessage === null) {
      continue;
    }

    let planet = validMessage.groups.planet;
    let attackType = validMessage.groups.attackType;

    if (attackType === 'A') {
      attackedPlanets.push(planet);
    } else if (attackType === 'D') {
      destroyedPlanets.push(planet);
    }
  }

  const output = arr => {
    if (arr.length !== 0) {
      arr.sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));
    }
  };

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  output(attackedPlanets);

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  output(destroyedPlanets);
}

console.log('----------------------Test 1----------------------');
starEnigma([
  '2',
  'STCDoghudd4=63333$D$0A53333',
  'EHfsytsnhf?8555&I&2C9555SR'
]);

/* 
  Attacked planets: 1
  -> Alderaa
  Destroyed planets: 1
  -> Cantonica

*/

console.log('----------------------Test 2----------------------');
starEnigma([
  '3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR'
]);

/* 
  Attacked planets: 0
  Destroyed planets: 2
  -> Cantonica
  -> Coruscant

*/