// function personInfo(firstName, lastName, age) {
//   const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//   };
//   return person;
// }

/* Shorthand where the key and the prop have the same name */

// function personInfo(firstName, lastName, age) {
//   const person = {
//     firstName,
//     lastName,
//     age,
//   };
//   return person;
// }

    
// Even shorter syntax
function personInfo(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
  };
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));

