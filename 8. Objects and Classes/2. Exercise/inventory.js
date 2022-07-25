function inventory(input) {
  const heroes = [];

  input.forEach(hero => {
    const [heroName, level, items] = hero.split(' / ');

    heroes.push({
      heroName,
      level: Number(level),
      items,
    });
  });

  const sortedByLevel = heroes.sort((a, b) => a.level - b.level);

  sortedByLevel.forEach(hero => {
    console.log(`Hero: ${hero.heroName}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}

console.log('------------------Test 1------------------');
inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
]);

/* 
  Hero: Hes
  level => 1
  items => Desolator, Sentinel, Antara
  Hero: Derek
  level => 12
  items => BarrelVest, DestructionSword
  Hero: Isacc
  level => 25
  items => Apple, GravityGun
*/

console.log('------------------Test 2------------------');
inventory([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara'
]);

/* 
  Hero: Batman
  level => 2
  items => Banana, Gun
  Hero: Superman
  level => 18
  items => Sword
  Hero: Poppy
  level => 28
  items => Sentinel, Antara
*/