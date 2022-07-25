function bookShelf(input) {
  const shelves = {};

  for (const elem of input) {
    if (elem.includes('->')) {
      const [id, genre] = elem.split(' -> ');

      if (!shelves.hasOwnProperty(id)) {
        shelves[id] = {
          [genre]: [],
        };
      }
    } else if (elem.includes(': ')) {
      const [bookInfo, genre] = elem.split(', ');
      const keys = Object.keys(shelves);

      for (const key of keys) {
        if (shelves[key].hasOwnProperty(genre)) {
          shelves[key][genre].push(bookInfo);
          break;
        }
      }
    }
  }

  Object.keys(shelves)
    .sort((a, b) => Object.entries(shelves[b])[0][1].length - Object.entries(shelves[a])[0][1].length)
    .forEach(id => {
      console.log(`${id} ${Object.keys(shelves[id])}: ${Object.values(shelves[id])[0].length}`);

      Object.values(shelves[id])
        .forEach(values => {
          values.sort((a, b) => a.localeCompare(b))
            .forEach(v => {
              console.log(`--> ${v}`);
            });
        }
      );
    }
  );
}

console.log('---------------------- Test 1  ----------------------');
bookShelf([
  '1 -> history',
  '1 -> action',
  'Death in Time: Criss Bell, mystery',
  '2 -> mystery',
  '3 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Hurting Secrets: Dustin Bolt, action',
  'Future of Dawn: Aiden Rose, sci-fi',
  'Lions and Rats: Gabe Roads, history',
  '2 -> romance',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
  'Pilots of Stone: Brook Jay, history'
]);

/* 
  3 sci-fi: 3
  --> Future of Dawn: Aiden Rose
  --> Losing Dreams: Gail Starr
  --> Name of Earth: Jo Bell
  1 history: 2
  --> Lions and Rats: Gabe Roads
  --> Pilots of Stone: Brook Jay
  2 mystery: 1
  --> Child of Silver: Bruce Rich
*/

console.log('---------------------- Test 2  ----------------------');
bookShelf([
  '1 -> mystery',
  '2 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Lions and Rats: Gabe Roads, history',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi'
]);

/* 
  2 sci-fi: 2
  --> Losing Dreams: Gail Starr
  --> Name of Earth: Jo Bell
  1 mystery: 1
  --> Child of Silver: Bruce Rich
*/