function employees(input) {
  const employeeObj = {};

  for (const emp of input) {
    let len = emp.length;
    employeeObj.name = emp;
    employeeObj.personalNumber = len;
    console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNumber}`);
  }
}

employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
]);

employees([
  'Samuel Jackson',
  'Will Smith',
  'Bruce Willis',
  'Tom Holland'
]);