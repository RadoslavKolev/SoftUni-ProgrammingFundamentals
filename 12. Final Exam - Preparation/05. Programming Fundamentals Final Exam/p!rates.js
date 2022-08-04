function pirates(input) {
  const targetedCities = {};
  const startIndex = input.indexOf('Sail') + 1;
  const len = input.length;

  for (const elem of input) {
    if (elem === 'Sail') break;

    let [city, population, gold] = elem.split('||');
    population = Number(population);
    gold = Number(gold);

    if (!targetedCities.hasOwnProperty(city)) {
      targetedCities[city] = {
        population: 0,
        gold: 0,
      }
    }

    targetedCities[city].population += population;
    targetedCities[city].gold += gold;
  }

  function plunder(obj, town, people, gold) {
    obj[town].population -= people;
    obj[town].gold -= gold;

    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

    if (obj[town].population <= 0 || obj[town].gold <= 0) {
      delete obj[town];
      console.log(`${town} has been wiped off the map!`);
    }
  }

  function prosper(obj, town, gold) {
    if (gold < 0) {
      console.log("Gold added cannot be a negative number!");
      return;
    }

    obj[town].gold += gold;

    console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);
  }

  for (let i = startIndex; i < len; i++) {
    if (input[i] === 'End') break;

    const [command, town, ...rest] = input[i].split('=>');

    switch (command) {
      case 'Plunder':
        const peopleKilled = Number(rest[0]);
        const goldTaken = Number(rest[1]);
        plunder(targetedCities, town, peopleKilled, goldTaken);
        break;
      case 'Prosper':
        const goldIncrease = Number(rest[0]);
        prosper(targetedCities, town, goldIncrease);
        break;
      default:
        console.log('No such command!');
        continue;
    }
  }

  const settlements = Object.entries(targetedCities);
  const count = settlements.length;

  if (count === 0) {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    return;
  } 

  console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);

  settlements.forEach(([town, obj]) => {
    console.log(`${town} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`);
  });
}

console.log('-------------------- Test 1 --------------------');
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End"
]);

/* 
  Tortuga plundered! 380 gold stolen, 75000 citizens killed.
  180 gold added to the city treasury. Santo Domingo now has 810 gold.
  Ahoy, Captain! There are 3 wealthy settlements to go to:
  Tortuga -> Population: 270000 citizens, Gold: 870 kg
  Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
  Havana -> Population: 410000 citizens, Gold: 1100 kg
*/

console.log('-------------------- Test 2 --------------------');
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End"
]);

/* 
  Gold added cannot be a negative number!
  Nassau plundered! 750 gold stolen, 94000 citizens killed.
  Nassau plundered! 150 gold stolen, 1000 citizens killed.
  Nassau has been wiped off the map!
  Campeche plundered! 690 gold stolen, 150000 citizens killed.
  Campeche has been wiped off the map!
  Ahoy, Captain! There are 2 wealthy settlements to go to:
  San Juan -> Population: 930000 citizens, Gold: 1250 kg
  Port Royal -> Population: 420000 citizens, Gold: 3000 kg
*/