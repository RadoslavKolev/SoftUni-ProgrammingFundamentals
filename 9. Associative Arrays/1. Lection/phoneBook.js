function phoneBook(input) {
  const phoneBook = {};

  input.forEach(elem => {
    const [name, phone] = elem.split(' ');
    phoneBook[name] = phone;
  });

  for (const [key, value] of Object.entries(phoneBook)) {
    console.log(`${key} -> ${value}`);
  }
}

// Test 1
console.log('\n----------------------------Test 1----------------------------\n');

phoneBook([
  'Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344'
]);

/* Results:
  Tim -> 0876566344
  Peter -> 0877547887
  Bill -> 0896543112
*/

// Test 2
console.log('\n----------------------------Test 2----------------------------\n');

phoneBook([
  'George 0552554',
  'Peter 087587',
  'George 0453112',
  'Bill 0845344'
]);

/* Results:
  George -> 0453112
  Peter -> 087587
  Bill -> 0845344
*/