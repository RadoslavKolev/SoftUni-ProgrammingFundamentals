function arenaTier(input) {
  const list = {};

  function add(elem) {
    let [gladiator, skill, power] = elem.split(' -> ');
    power = Number(power);
    if (!list.hasOwnProperty(gladiator)) {
      list[gladiator] = {};
      list[gladiator][skill] = power;
    } else {
      if (!list[gladiator].hasOwnProperty(skill)) {
        list[gladiator][skill] = power;
      } else {
        let oldPower = list[gladiator][skill];

        if (power > oldPower) {
          list[gladiator][skill] = power;
        }
      }
    }
  }

  function battle(el) {
    let [gladiatorA, gladiatorB] = el.split(' vs ');

    if (list.hasOwnProperty(gladiatorA) && list.hasOwnProperty(gladiatorB)) {
      let skillA = list[gladiatorA];
      let skillB = list[gladiatorB];

      for (let elemA in skillA) {
        for (let elemB in skillB) {
          if (elemA === elemB) {
            if (skillA[elemA] > skillB[elemB]) {
              delete list[gladiatorB];
            } else if (skillA[elemA] < skillB[elemB]) {
              delete list[gladiatorA];
            }
          }
        }
      }
    }
  }

  for (const elem of input) {
    if (elem === 'Ave Cesar') {
      break;
    } else if (elem.includes(' -> ')) {
      add(elem);
    } else if (elem.includes(' vs ')) {
      battle(elem);
    }
  }

  let tier = Object.entries(list);
  let array = [];

  for (let elem of tier) {
    let name = elem[0];
    let pow = Object.entries(elem[1]);
    let sum = pow.map(a => a[1]).reduce((a, b) => a + b);
    array.push([name, pow, sum]);
  }

  array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));

  for (let part of array) {
    console.log(`${part[0]}: ${part[2]} skill`);
    part[1]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(x => console.log(`- ${x[0]} <!> ${x[1]}`));
  }
}

console.log('---------------------- Test 1  ----------------------');
arenaTier([
  'Peter -> BattleCry -> 400',
  'Alex -> PowerPunch -> 300',
  'Stefan -> Duck -> 200',
  'Stefan -> Tiger -> 250',
  'Ave Cesar'
]);

/* 
  Stefan: 450 skill
  - Tiger <!> 250
  - Duck <!> 200
  Peter: 400 skill
  - BattleCry <!> 400
  Alex: 300 skill
  - PowerPunch <!> 300
*/

console.log('---------------------- Test 2  ----------------------');
arenaTier([
  'Peter -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar'
]);

/* 
  Gladius: 700 skill
  - Shield <!> 250
  - Support <!> 250
  - Heal <!> 200
  Peter: 400 skill
  - Duck <!> 400

*/