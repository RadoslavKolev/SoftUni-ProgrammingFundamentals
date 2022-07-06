function addressBook(input) {
  const addressInfo = {};

  input.forEach(elem => {
    let [name, address] = elem.split(':');
    addressInfo[name] = address;
  });

  const sortedKeys = Object.keys(addressInfo)
    .sort((a, b) => a.localeCompare(b));
  
  sortedKeys.forEach(key => {
    console.log(`${key} -> ${addressInfo[key]}`);
  });
}

// Test 1
console.log('\n----------------------------Test 1----------------------------\n');

addressBook([
  'Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd'
]);

/* Results:
  Bill -> Ornery Rd
  Peter -> Carlyle Ave
  Tim -> Doe Crossing
*/

// Test 2
console.log('\n----------------------------Test 2----------------------------\n');

addressBook([
  'Bob:Huxley Rd',
  'John:Milwaukee Crossing ',
  'Peter:Fordem Ave',
  'Bob:Redwing Ave',
  'George:Mesta Crossing',
  'Ted:Gateway Way',
  'Bill:Gateway Way',
  'John:Grover Rd',
  'Peter:Huxley Rd',
  'Jeff:Gateway Way',
  'Jeff:Huxley Rd'
]);

/* Results:
  Bill -> Gateway Way
  Bob -> Redwing Ave
  George -> Mesta 
  Crossing
  Jeff -> Huxley Rd
  John -> Grover Rd
  Peter -> Huxley Rd
  Ted -> Gateway Way
*/