function partyTime(input) {
  const guests = {
    vip: [],
    regular: [],
  };
  
  let isParty = false;

  for (const guest of input) {
    if (guest === 'PARTY') {
      isParty = true;
      continue;
    }

    let firstLetter = Number(guest[0]);

    if (!isParty) {

      if (Number.isInteger(firstLetter)) {
        guests.vip.push(guest);
      } else {
        guests.regular.push(guest);
      }
    } else {
      if (Number.isInteger(firstLetter)) {
        if (guests.vip.includes(guest)) {
          let index = guests.vip.indexOf(guest);
          guests.vip.splice(index, 1);
        }
      } else {
        if (guests.regular.includes(guest)) {
          let index = guests.regular.indexOf(guest);
          guests.regular.splice(index, 1);
        }
      }
    }
  }

  let guestsLeft = guests.vip.length + guests.regular.length;
  console.log(guestsLeft);
  console.log(guests.vip.join('\n'));
  console.log(guests.regular.join('\n'));
}

console.log('---------------------- Test 1  ----------------------');
partyTime([
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
partyTime([
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