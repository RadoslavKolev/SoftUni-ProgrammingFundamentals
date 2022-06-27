function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  let dungeon = input.split('|');

  const potion = (hp) => {
    let healthNeeded = 100 - health;
    if (hp > healthNeeded) {
      hp = healthNeeded;
    }
    health += hp;
    console.log(`You healed for ${hp} hp.`);
    console.log(`Current health: ${health} hp.`);
  };

  const chest = (coins) => {
    bitcoins += coins;
    console.log(`You found ${coins} bitcoins.`);
  };

  const fight = (attack) => {
    health -= attack;
  };

  let len = dungeon.length;
  let bestRoom = 1;

  for (let i = 0; i < len; i++) {
    let currentAction = dungeon[i].split(' ');
    let action = currentAction[0];
    let amount = Number(currentAction[1]);

    switch (action) {
      case 'potion':
        potion(amount);
        break;
      case 'chest':
        chest(amount);
        break;
      default:
        fight(amount);
        if (health > 0) {
          console.log(`You slayed ${action}.`);
        } else {
          console.log(`You died! Killed by ${action}.`);
          console.log(`Best room: ${bestRoom}`);
          return;
        }
    }
    bestRoom++;
  }

  console.log("You've made it!");
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");