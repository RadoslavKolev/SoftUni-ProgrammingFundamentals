function convertToJSON(name, lastName, hairColor) {
  const json = JSON.stringify({
    name,
    lastName,
    hairColor,
  });

  console.log(json);
}

console.log('------------------Test 1------------------');
convertToJSON('George', 'Jones', 'Brown');

// {"name":"George","lastName":"Jones","hairColor":"Brown"}

console.log('------------------Test 2------------------');
convertToJSON('Peter', 'Smith', 'Blond');

// {"name":"Peter","lastName":"Smith","hairColor":"Blond"}
