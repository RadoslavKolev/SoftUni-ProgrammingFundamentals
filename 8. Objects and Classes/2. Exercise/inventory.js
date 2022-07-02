function inventory(input) {
  const heroes = [];

  input.forEach(hero => {
    let [heroName, level, items] = hero.split(' / ');
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

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
]);

inventory([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara'
]);