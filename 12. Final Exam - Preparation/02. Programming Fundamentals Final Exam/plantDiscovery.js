function plantDiscovery(input) {
  const n = Number(input.shift());
  const plants = {};

  for (let i = 0; i < n; i++) {
    let [plant, rarity] = input.shift().split('<->');
    rarity = Number(rarity);

    plants[plant] = {
      rarity,
      ratings: [],
    };
  }

  function rate(obj, plant, rating) {
    if (obj.hasOwnProperty(plant)) {
      obj[plant].ratings.push(rating);
    } else {
      console.log('error');
    }
  }

  function update(obj, plant, newRarity) {
    if (obj.hasOwnProperty(plant)) {
      obj[plant].rarity = newRarity;
    } else {
      console.log('error');
    }
  }

  function reset(obj, plant) {
    if (obj.hasOwnProperty(plant)) {
      obj[plant].ratings = [];
    } else {
      console.log('error');
    }
  }

  for (const elem of input) {
    if (elem === 'Exhibition') break;

    const [command, plant, ...rest] = elem
      .replace(': ', ' - ')
      .split(' - ');

    switch (command) {
      case 'Rate':
        const rating = Number(rest[0]);
        rate(plants, plant, rating);
        break;
      case 'Update':
        const newRarity = Number(rest[0]);
        update(plants, plant, newRarity);
        break;
      case 'Reset':
        reset(plants, plant);
        break;
      default:
        console.log('No such command');
        continue;
    }
  }

  console.log('Plants for the exhibition:');

  Object.entries(plants)
    .forEach(([plant, obj]) => {
      let avg = 0;

      if (obj.ratings.length > 0) {
        const sum = obj.ratings.reduce((a, b) => a + b);
        avg = sum / obj.ratings.length;
      }

      console.log(`- ${plant}; Rarity: ${obj.rarity}; Rating: ${avg.toFixed(2)}`);
    }
  );
}

console.log('------------------Test 1------------------');
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"
]);

/* 
  Plants for the exhibition:
  - Arnoldii; Rarity: 4; Rating: 0.00
  - Woodii; Rarity: 5; Rating: 7.50
  - Welwitschia; Rarity: 2; Rating: 7.00
*/

console.log('------------------Test 2------------------');
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition"
]);

/* 
  Plants for the exhibition:
  - Candelabra; Rarity: 10; Rating: 6.00
  - Oahu; Rarity: 10; Rating: 7.00
*/