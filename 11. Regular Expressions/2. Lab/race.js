function race(input) {
  const competitors = input.shift().split(', ');
  const namePattern = /[a-z]+/gi;
  const distancePattern = /\d/g;
  const competitorsObj = {};

  for (const elem of input) {
    if (elem === 'end of race') {
      break;
    }

    const name = elem.match(namePattern).join('');

    if (!competitors.includes(name)) {
      continue;
    }

    const distance = elem
      .match(distancePattern)
      .map(Number)
      .reduce((total, num) => total + num);

    if (!competitorsObj.hasOwnProperty(name)) {
      competitorsObj[name] = 0;
    }

    competitorsObj[name] += distance;
  }

  let counter = 1;

  Object.keys(competitorsObj)
    .sort((nameA, nameB) => competitorsObj[nameB] - competitorsObj[nameA])
    .slice(0, 3)
    .forEach(name => {
      let message = '';

      if (counter === 1) {
        message = '1st place';
      } else if (counter === 2) {
        message = '2nd place';
      } else if (counter === 3) {
        message = '3rd place';
      }

      console.log(`${message}: ${name}`);
      counter++;
    }
  );
}

console.log('----------------------Test 1----------------------');
race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race'
]);

/* 
  1st place: George
  2nd place: Peter
  3rd place: Tom
*/

console.log('----------------------Test 2----------------------');
race([
  'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
  'Mi*&^%$ch123o!#$%#nne787) ',
  '%$$B(*&&)i89ll)*&) ',
  'R**(on%^&ald992) ',
  'T(*^^%immy77) ',
  'Ma10**$#g0g0g0i0e',
  'end of race'
]);

/* 
  1st place: Michonne
  2nd place: Ronald
  3rd place: Bill
*/