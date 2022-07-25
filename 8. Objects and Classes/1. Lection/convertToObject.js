function convertToObject(json) {
  // Converting JSON string to JS Object
  const person = JSON.parse(json);

  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}

console.log('------------------Test 1------------------');
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

/* 
  name: George
  age: 40
  town: Sofia
*/

console.log('------------------Test 2------------------');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');

/* 
  name: Peter
  age: 35
  town: Plovdiv
*/