function netherRealms(str) {
  const demons = str.split(/[, ]+/g)
    .sort((a, b) => a.localeCompare(b));

  const healthPattern = /[^0-9+*/.-]/g; 
  const damagePattern = /-?[\d.]+/g;  // integer or decimal (optional negative)
  const checkPattern = /[*/]/;

  for (const demon of demons) {
    let health = demon.match(healthPattern)
      .reduce((a, b) => a + b.charCodeAt(), 0);

    let damage = 0;
    const numbers = demon.match(damagePattern);

    if (numbers) {
      damage = numbers.map(Number)
        .reduce((a, b) => a + b);

      // If there are * or / in the string
      if (checkPattern.test(demon)) {
        for (const letter of demon) {
          if (letter === '*') {
            damage *= 2;
          } else if (letter === '/') {
            damage /= 2;
          }
        }
      }
    }

    console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
  }
}

console.log('----------------------Test 1----------------------');
netherRealms('M3ph-0.5s-0.5t0.0**');

// M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage

console.log('----------------------Test 2----------------------');
netherRealms('M3ph1st0**, Azazel');

/* 
  Azazel - 615 health, 0.00 damage 
  M3ph1st0** - 524 health, 16.00 damage
*/

console.log('----------------------Test 3----------------------');
netherRealms('Gos/ho');

// Gos/ho - 512 health, 0.00 damage