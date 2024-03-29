function armies(input) {
  const armyObj = {};

  const addLeader = (obj, leader) => {
    obj[leader] = {};
  };

  const addArmy = (obj, leader, armyName, armyCount) => {
    obj[leader][armyName] = armyCount;
  };

  const incrementArmy = (obj, leader, armyName, armyCount) => {
    obj[leader][armyName] += armyCount;
  };

  const removeLeader = (obj, leader) => {
    delete obj[leader];
  };

  input.forEach(elem => {
    if (elem.includes('arrives')) {
      const leader = elem.replace(' arrives', '');
      addLeader(armyObj, leader);
    } else if (elem.includes(':')) {
      const [leader, army] = elem.split(': ');
      let [armyName, armyCount] = army.split(', ');
      armyCount = Number(armyCount);

      if (armyObj.hasOwnProperty(leader)) {
        addArmy(armyObj, leader, armyName, armyCount);
      }
    } else if (elem.includes('+')) {
      let [armyName, armyCount] = elem.split(' + ');
      armyCount = Number(armyCount);

      Object.keys(armyObj)
        .forEach(leader => {
          if (armyObj[leader].hasOwnProperty(armyName)) {
            incrementArmy(armyObj, leader, armyName, armyCount);
          }
        }
      );
    } else if (elem.includes('defeated')) {
      const leader = elem.replace(' defeated', '');

      if (armyObj.hasOwnProperty(leader)) {
        removeLeader(armyObj, leader);
      }
    }
  });

  const totalArmyCount = {};

  Object.entries(armyObj)
    .forEach(([leader, army]) => {
      if (!totalArmyCount.hasOwnProperty(leader)) {
        totalArmyCount[leader] = 0;
      }
  
      const armiesCount = Object.values(army);
      let totalArmySum = 0;
  
      for (const currentArmy of armiesCount) {
        totalArmySum += currentArmy;
      }
  
      totalArmyCount[leader] = totalArmySum;
    }
  );

  Object.entries(totalArmyCount)
    .sort(([leaderA, armyA], [leaderB, armyB]) => armyB - armyA)
    .forEach(([leader, totalArmy]) => {
      console.log(`${leader}: ${totalArmy}`);

      Object.entries(armyObj[leader])
        .sort(([armyA, countA], [armyB, countB]) => countB - countA)
        .forEach(([army, count]) => {
          console.log(`>>> ${army} - ${count}`);
        }
      );
    }
  );
}

console.log('---------------------- Test 1  ----------------------');
armies([
  'Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion, 55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 3205'
]);

/* 
  Porter: 58507
  >>> Legion - 55302
  >>> Retix - 3205
  Findlay: 39040
  >>> Britox - 39040
*/

console.log('---------------------- Test 2  ----------------------');
armies([
  'Rick Burr arrives',
  'Findlay arrives',
  'Rick Burr: Juard, 1500',
  'Wexamp arrives',
  'Findlay: Wexamp, 34540',
  'Wexamp + 340',
  'Wexamp: Britox, 1155',
  'Wexamp: Juard, 43423'
]);

/* 
  Wexamp: 44578
  >>> Juard - 43423
  >>> Britox - 1155
  Findlay: 34880
  >>> Wexamp - 34880
  Rick Burr: 1500
  >>> Juard - 1500
*/