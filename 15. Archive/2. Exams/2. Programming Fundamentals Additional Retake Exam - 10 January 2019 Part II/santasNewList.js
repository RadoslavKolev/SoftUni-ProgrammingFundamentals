function santasNewList(input) {
  const goodChildren = {};
  const presents = {};

  for (const elem of input) {
    if (elem === 'END') break;

    if (elem.includes('Remove')) {
      const [command, childName] = elem.split('->');
      delete goodChildren[childName];
      continue;
    }

    let [childName, typeOfToy, amount] = elem.split('->');
    amount = Number(amount);
    
    if (!goodChildren.hasOwnProperty(childName)) {
      goodChildren[childName] = 0;
    }

    goodChildren[childName] += amount;

    if (!presents.hasOwnProperty(typeOfToy)) {
      presents[typeOfToy] = 0;
    }
    
    presents[typeOfToy] += amount;
  }

  console.log('Children:');

  Object.entries(goodChildren)
    .sort(([childA, presentsA], [childB, presentsB]) => {
      return presentsB - presentsA || childA.localeCompare(childB);
    })
    .forEach(([child, presents]) => {
      console.log(`${child} -> ${presents}`);
    }
  );

  console.log('Presents:');

  Object.entries(presents)
    .forEach(([toy, amount]) => {
      console.log(`${toy} -> ${amount}`);
    }
  );
}

console.log('------------- Test 1 -------------');
santasNewList([
  'Marty->Toys->5',
  'Sam->Candy->20',
  'Leo->Candy->10',
  'Leo->Toys->1',
  'Katy->Clothes->4',
  'Bobbie->Clothes->6',
  'Tanya->Phone->1',
  'Nasko->Tablet->3',
  'END'
]);

/* 
  Children:
  Sam -> 20
  Leo -> 11
  Bobbie -> 6
  Marty -> 5
  Katy -> 4
  Nasko -> 3
  Tanya -> 1
  Presents:
  Toys -> 6
  Candy -> 30
  Clothes -> 10
  Phone -> 1
  Tablet -> 3
*/

console.log('------------- Test 2 -------------');
santasNewList([
  'Teddy->Clothes->8',
  'Johny->Toys->10',
  'Freddie->Candy->30',
  'Johny->Candy->20',
  'Carrie->Phone->1',
  'Carrie->Tablet->1',
  'Carrie->Candy->10',
  'Teddy->Toys->5',
  'Remove->Teddy',
  'END'
]);

/* 
  Children:
  Freddie -> 30
  Johny -> 30
  Carrie -> 12
  Presents:
  Clothes -> 8
  Toys -> 15
  Candy -> 60
  Phone -> 1
  Tablet -> 1
*/