function demo(arr) {
  const MAX_HEALTH = 100;
  let health = 100;
  let coins = 0;
  const regex = /\|/g;
  let dungeonRooms = arr.toString().replace(regex, " ");
  const dungeonRoomsArray = dungeonRooms.split(" ");
  let roomCounter = 1;
  let isDead = false;
  let len = dungeonRoomsArray.length;

  for (let i = 0, j = 1; j < len; i += 2, j += 2) {
    if (dungeonRoomsArray[i] === "potion") {
      let heal = Number(dungeonRoomsArray[j]);
      if (health + heal > MAX_HEALTH) {
        heal = MAX_HEALTH - health;
      }
      health += heal;
      console.log(`You healed for ${heal} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (dungeonRoomsArray[i] === "chest") {
      let foundCoins = Number(dungeonRoomsArray[j]);
      console.log(`You found ${foundCoins} coins.`);
      coins += foundCoins;
    } else {
      let monster = dungeonRoomsArray[i];
      let damage = Number(dungeonRoomsArray[j]);
      health -= damage;
      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${roomCounter}`);
        isDead = true;
        break;
      }
    }
    roomCounter++;
  }

  if (!isDead) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

demo(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
