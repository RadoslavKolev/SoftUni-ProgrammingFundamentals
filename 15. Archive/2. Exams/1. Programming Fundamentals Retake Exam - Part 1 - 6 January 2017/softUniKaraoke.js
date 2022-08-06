function softUniKaraoke(input) {
  const participants = input.shift().split(', ');
  const availableSongs = input.shift().split(', ');
  const awarded = {};

  for (const elem of input) {
    if (elem === 'dawn') break;

    const [name, song, award] = elem.split(', ');

    if (!participants.includes(name) || !availableSongs.includes(song)) continue;

    if (!awarded.hasOwnProperty(name)) {
      awarded[name] = new Set();
    }

    awarded[name].add(award);
  }

  if (Object.keys(awarded).length === 0) {
    console.log('No awards');
    return;
  }

  Object.entries(awarded)
    .sort(([nameA, setA], [nameB, setB]) => {
      return setB.size - setA.size || nameA.localeCompare(nameB);
    })
    .forEach(([name, awards]) => {
      console.log(`${name}: ${awards.size} awards`);
      Array.from(awards)
        .sort((a, b) => a.localeCompare(b))
        .forEach(award => {
          console.log(`--${award}`);
        }
      );
    }
  );
}

console.log('------------- Test 1 -------------');
softUniKaraoke([
  'Trifon, Vankata, Gesha',
  'Dragana - Kukavice, Bon Jovi - It\'s my life, Lorde - Royals',
  'Gesha, Bon Jovi - It\'s my life, Best Rock',
  'Vankata, Dragana - Kukavice, Best Srabsko',
  'Vankata, Dragana - Kukavice, Best Srabsko',
  'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
  'Vankata, PHP Web, Educational 101',
  'dawn'
]);

/*
  Vankata: 2 awards
  --Best Srabsko
  --Stiga Tolko Srabsko
  Gesha: 1 awards
  --Best Rock
*/

console.log('------------- Test 2 -------------');
softUniKaraoke([
  'Gesha',
  'Bon Jovi - It\'s my life',
  'Gesha, Bon Jovi - It\'s my life, Best Rock',
  'Vankata, Dragana - Kukavice, Best Srabsko',
  'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
  'Vankata, PHP Web, Educational 101',
  'dawn'
]);

/* 
  Gesha: 1 awards
  --Best Rock
*/

console.log('------------- Test 3 -------------');
softUniKaraoke([
  'Sino',
  'Vasko Naidenov - Nova Godina',
  'dawn'
]);

// No awards