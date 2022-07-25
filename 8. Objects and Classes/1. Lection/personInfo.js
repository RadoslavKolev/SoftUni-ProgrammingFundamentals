function personInfo(firstName, lastName, age) {
  const person = {
    firstName,
    lastName,
    age,
  };

  console.log(person)
}

console.log('------------------Test 1------------------');
personInfo("Peter", "Pan", "20");

// {firstName: 'Peter', lastName: 'Pan', age: '20'}

console.log('------------------Test 2------------------');
personInfo("George", "Smith", "18");

// {firstName: 'George', lastName: 'Smith', age: '18'}

