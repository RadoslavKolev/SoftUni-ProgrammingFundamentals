function convertToObject(json) {
  // Converting JSON string to JS Object
  let person = JSON.parse(json);

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');