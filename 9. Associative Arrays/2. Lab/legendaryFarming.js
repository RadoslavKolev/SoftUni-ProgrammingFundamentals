function legendaryFarming(input) {
  const GOAL = 250;
  const materials = input.split(' ');
  const junk = {};
  let isObtained = false;

  const materialsObj = {
    'shards': 0,
    'fragments': 0,
    'motes': 0,
  };

  while (materials.length > 0) {
    const quantity = Number(materials.shift());
    const material = materials.shift().toLowerCase();

    switch (material) {
      case 'shards':
        materialsObj[material] += quantity;
        break;
      case 'fragments':
        materialsObj[material] += quantity;
        break;
      case 'motes':
        materialsObj[material] += quantity;
        break;
      default:
        if (!junk.hasOwnProperty(material)) {
          junk[material] = 0;
        }

        junk[material] += quantity;
    }

    const entries = Object.entries(materialsObj);

    for (const [key, value] of entries) {
      if (value >= 250) {
        let message = '';
        if (key === 'shards') {
          message = 'Shadowmourne';
        } else if (key === 'fragments') {
          message = 'Valanyr';
        } else if (key === 'motes') {
          message = 'Dragonwrath';
        }

        console.log(`${message} obtained!`);
        materialsObj[key] -= GOAL;
        isObtained = true;
        break;
      }
    }

    if (isObtained) {
      break;
    }
  }

  Object.entries(materialsObj)
    .sort(([materialA, valueA], [materialB, valueB]) =>
      valueB - valueA || materialA.localeCompare(materialB))
    .forEach(([material, value]) => {
      console.log(`${material}: ${value}`);
    });

  Object.keys(junk)
    .sort((keyA, keyB) =>
      keyA.localeCompare(keyB))
    .forEach(key => {
      console.log(`${key}: ${junk[key]}`);
    });
}

console.log('---------------------- Test 1  ----------------------');
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

/* 
  Valanyr obtained!
  fragments: 5
  shards: 5
  motes: 3
  leathers: 6
  stones: 5
*/

console.log('---------------------- Test 2  ----------------------');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');

/* 
  Dragonwrath obtained!
  shards: 22
  motes: 19
  fragments: 0
  fangs: 9
  silver: 123
*/