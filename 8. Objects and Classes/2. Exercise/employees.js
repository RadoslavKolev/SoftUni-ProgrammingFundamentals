function employees(input) {
  const employeeObj = {};

  for (const employee of input) {
    const len = employee.length;

    employeeObj.name = employee;
    employeeObj.personalNumber = len;
    
    console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNumber}`);
  }
}

console.log('------------------Test 1------------------');
employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
]);

/* 
  Name: Silas Butler -- Personal Number: 12
  Name: Adnaan Buckley -- Personal Number: 14
  Name: Juan Peterson -- Personal Number: 13
  Name: Brendan Villarreal -- Personal Number: 18
*/

console.log('------------------Test 2------------------');
employees([
  'Samuel Jackson',
  'Will Smith',
  'Bruce Willis',
  'Tom Holland'
]);

/* 
  Name: Samuel Jackson -- Personal Number: 14
  Name: Will Smith -- Personal Number: 10
  Name: Bruce Willis -- Personal Number: 12
  Name: Tom Holland -- Personal Number: 11
*/