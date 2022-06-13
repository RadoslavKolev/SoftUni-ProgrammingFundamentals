function carWash(commands) {
  let carCleaned = 0;

  let soap = x => x + 10;
  let water = x => x + x * 0.20;
  let vacuum = x => x + x * 0.25;
  let mud = x => x - x * 0.10;

  for (let elem of commands) {
    if (elem === 'soap') {
      carCleaned = soap(carCleaned);
    } else if (elem === 'water') {
      carCleaned = water(carCleaned);
    } else if (elem === 'vacuum cleaner') {
      carCleaned = vacuum(carCleaned);
    } else if (elem === 'mud') {
      carCleaned = mud(carCleaned);
    } 
  }

  console.log(`The car is ${carCleaned.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);