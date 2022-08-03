function thePianist(input) {
  const pieces = Number(input.shift());
  const pianists = {};

  for (let i = 0; i < pieces; i++) {
    const [piece, composer, key] = input.shift().split('|');

    pianists[piece] = {
      composer,
      key,
    };
  }

  const add = (obj, piece, composer, key) => {
    if (!obj.hasOwnProperty(piece)) {
      obj[piece] = {
        composer,
        key,
      };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  };

  const remove = (obj, piece) => {
    if (obj.hasOwnProperty(piece)) {
      delete obj[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }
  };

  const changeKey = (obj, piece, newKey) => {
    if (obj.hasOwnProperty(piece)) {
      obj[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }
  };

  for (const elem of input) {
    if (elem === 'Stop') break;

    const [command, piece, ...rest] = elem.split('|');

    switch (command) {
      case 'Add':
        const composer = rest[0];
        const key = rest[1];
        add(pianists, piece, composer, key);
        break;
      case 'Remove':
        remove(pianists, piece);
        break;
      case 'ChangeKey':
        const newKey = rest[0];
        changeKey(pianists, piece, newKey);
        break;
      default:
        console.log('No such command!');
        continue;
    }
  }

  Object.entries(pianists)
    .forEach(([piece, obj]) => {
      console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
    }
  );
}

console.log('-----------------------------Test 1-----------------------------');
thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
]);

/* 
  Sonata No.2 by Chopin in B Minor added to 
  the collection!
  Hungarian Rhapsody No.2 by Liszt in C# 
  Minor added to the collection!
  Fur Elise is already in the collection!
  Successfully removed Clair de Lune!
  Changed the key of Moonlight Sonata to C# 
  Major!
  Fur Elise -> Composer: Beethoven, Key: A 
  Minor
  Moonlight Sonata -> Composer: Beethoven, 
  Key: C# Major
  Sonata No.2 -> Composer: Chopin, Key: B 
  Minor
  Hungarian Rhapsody No.2 -> Composer: Liszt, 
  Key: C# Minor
*/

console.log('-----------------------------Test 2-----------------------------');
thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]);

/* 
  Spring by Vivaldi in E Major added to the 
  collection!
  Successfully removed The Marriage of 
  Figaro!
  Invalid operation! Turkish March does not 
  exist in the collection.
  Changed the key of Spring to C Major!
  Nocturne by Chopin in C# Minor added to the 
  collection!
  Eine kleine Nachtmusik -> Composer: Mozart, 
  Key: G Major
  La Campanella -> Composer: Liszt, Key: G# 
  Minor
  Hungarian Dance No.5 -> Composer: Brahms, 
  Key: G Minor
  Spring -> Composer: Vivaldi, Key: C Major
  Nocturne -> Composer: Chopin, Key: C# Minor
*/