// Bobby's variant

function solve(arr) {
  const allGuests = [];

  while (arr[0] !== 'PARTY') {
      const guest = arr.shift();
      allGuests.push(guest);
  }

  arr.forEach(el => {
      if (allGuests.includes(el)) {
          allGuests.splice(allGuests.indexOf(el), 1);
      }
  });

  const vips = allGuests.filter(el => !isNaN(Number(el[0])));
  const regulars = allGuests.filter(el => isNaN(Number(el[0])));

  const result = vips.concat(regulars);
  console.log(result.length);
  result.forEach(el => console.log(el));
}

console.log('---------------------- Test 1  ----------------------');
solve([
  '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc'
]);

/* 
  2
  7IK9Yo0h
  tSzE5t0p
*/

console.log('---------------------- Test 2  ----------------------');
solve([
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ'
]);

/* 
  2
  xys2FYzn
  MDzcM9ZK
*/