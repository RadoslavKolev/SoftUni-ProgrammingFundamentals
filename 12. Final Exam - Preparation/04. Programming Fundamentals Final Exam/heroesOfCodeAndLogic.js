function heroesOfCodeAndLogic(input) {
  const MAX_HEALTH = 100;
  const MAX_MANA = 200;
  const numberOfHeroes = Number(input.shift());
  const heroes = {};

  for (let i = 0; i < numberOfHeroes; i++) {
    let [hero, health, mana] = input.shift().split(' ');
    health = Number(health);
    mana = Number(mana);

    heroes[hero] = {
      health,
      mana,
    };
  }

  function castSpell(obj, hero, manaNeeded, spellName) {
    if (obj[hero].mana >= manaNeeded) {
      obj[hero].mana -= manaNeeded;
      console.log(`${hero} has successfully cast ${spellName} and now has ${obj[hero].mana} MP!`);
    } else {
      console.log(`${hero} does not have enough MP to cast ${spellName}!`);
    }
  }

  function takeDamage(obj, hero, damage, attacker) {
    obj[hero].health -= damage;

    if (obj[hero].health > 0) {
      console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${obj[hero].health} HP left!`);
    } else {
      delete obj[hero];
      console.log(`${hero} has been killed by ${attacker}!`);
    }
  }

  function recharge(obj, hero, amount) {
    if (obj[hero].mana + amount > MAX_MANA) {
      amount = MAX_MANA - obj[hero].mana;
    }

    obj[hero].mana += amount;
    console.log(`${hero} recharged for ${amount} MP!`);
  }

  function heal(obj, hero, amount) {
    if (obj[hero].health + amount > MAX_HEALTH) {
      amount = MAX_HEALTH - obj[hero].health;
    }

    obj[hero].health += amount;
    console.log(`${hero} healed for ${amount} HP!`);
  }

  for (const elem of input) {
    if (elem === 'End') break;

    const [command, hero, ...rest] = elem.split(' - ');

    switch (command) {
      case 'CastSpell':
        const manaNeeded = Number(rest[0]);
        const spellName = rest[1];
        castSpell(heroes, hero, manaNeeded, spellName);
        break;
      case 'TakeDamage':
        const damage = Number(rest[0]);
        const attacker = rest[1];
        takeDamage(heroes, hero, damage, attacker);
        break;
      case 'Recharge':
        const manaAmount = Number(rest[0]);
        recharge(heroes, hero, manaAmount);
        break;
      case 'Heal':
        const healthAmount = Number(rest[0]);
        heal(heroes, hero, healthAmount);
        break;
      default:
        console.log('No such command!');
        continue;
    }
  }

  Object.entries(heroes)
    .forEach(([hero, obj]) => {
      console.log(`${hero}`);
      console.log(`  HP: ${obj.health}`);
      console.log(`  MP: ${obj.mana}`);
    }
  );
}

console.log('--------------------Test 1--------------------');
heroesOfCodeAndLogic([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End'
]);

/*
  Solmyr healed for 10 HP!
  Solmyr recharged for 50 MP!
  Kyrre was hit for 66 HP by Orc and now has 33 HP left!
  Kyrre has successfully cast ViewEarth and now has 35 MP!
  Solmyr
    HP: 95
    MP: 170
  Kyrre
    HP: 33
    MP: 35
*/

console.log('--------------------Test 2--------------------');
heroesOfCodeAndLogic([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End'
]);

/*
  SirMullich healed for 30 HP!
  Adela recharged for 50 MP!
  Tyris does not have enough MP to cast Fireball!
  Tyris has been killed by Fireball!
  Ivor has been killed by Mosquito!
  Adela
    HP: 90
    MP: 200
  SirMullich
    HP: 100
    MP: 40
*/