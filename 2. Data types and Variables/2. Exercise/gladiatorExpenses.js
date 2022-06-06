function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let brokenHelmets = 0;
  let brokenSwords = 0;
  let brokenShields = 0;
  let brokenArmors = 0;

  for (let game = 1; game <= lostFights; game++) {
    if (game % 2 === 0) {
      brokenHelmets++;
    }
    if (game % 3 === 0) {
      brokenSwords++;
    }
    if (game % 2 === 0 && game % 3 === 0) {
      brokenShields++;
      if (brokenShields % 2 === 0) {
        brokenArmors++;
      }
    }
  }

  let helmets = brokenHelmets * helmetPrice;
  let swords = brokenSwords * swordPrice;
  let shields = brokenShields * shieldPrice;
  let armors = brokenArmors * armorPrice;

  let total = helmets + swords + shields + armors;
  console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

// gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
