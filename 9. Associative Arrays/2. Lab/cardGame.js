function cardGame(input) {
  const cardPower = {
    '1': 10,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
  };

  const cardType = {
    'C': 1,
    'D': 2,
    'H': 3,
    'S': 4,
  };

  const players = new Map();

  input.forEach(elem => {
    let [name, deck] = elem.split(': ');
    deck = deck.split(', ');

    if (!players.has(name)) {
      players.set(name, new Set(deck));
    } else {
      let currentDeck = players.get(name);

      deck.forEach(card => {
        currentDeck.add(card);
      });

      players.set(name, currentDeck);
    }
  });

  const entries = [...players];

  for (const [name, deck] of entries) {
    let totalPoints = Array.from(deck)
      .map(card => cardPower[card[0]] * cardType[card[card.length - 1]])
      .reduce((a, b) => a + b, 0);

    console.log(`${name}: ${totalPoints}`);
  }
}

console.log('---------------------- Test 1  ----------------------');
cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD'
]);

/* 
  Peter: 167
  Tomas: 175
  Andrea: 197p
*/

console.log('---------------------- Test 2  ----------------------');
cardGame([
  'John: 2C, 4H, 9H, AS, QS',
  'Slav: 3H, 10S, JC, KD, 5S, 10S',
  'Alex: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'Slav: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'Alex: 6H, 7S, KC, KD, 5S, 10C',
  'Thomas: QH, QC, JS, JD, JC',
  'John: JD, JD, JD, JD'
]);

/* 
  John: 167
  Slav: 175
  Alex: 115
  Thomas: 125
*/