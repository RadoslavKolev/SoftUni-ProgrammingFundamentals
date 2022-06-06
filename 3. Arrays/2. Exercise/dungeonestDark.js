function dungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  let rooms = arr.toString().split("|");

  for (let i = 0; i < rooms.length; i++) {
    let [command, number] = rooms[i].split(" ");
    number = Number(number);
    switch (command) {
      case "potion":
        let healed = health + number > 100 ? 100 - health : number;
        health += healed;
        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        coins += number;
        console.log(`You found ${number} coins.`);
        break;
      default:
        health -= number;
        if (health <= 0) {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${i + 1}`);
          return;
        } else {
          console.log(`You slayed ${command}.`);
        }
        break;
    }
  }
  console.log(`You've made it!`);
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
