function convertToJSON(name, lastName, hairColor) {
  const person = {
    name,
    lastName,
    hairColor,
  };

  let json = JSON.stringify(person);
  console.log(json);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');