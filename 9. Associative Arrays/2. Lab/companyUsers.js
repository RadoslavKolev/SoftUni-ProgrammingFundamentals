function companyUsers(input) {
  const companies = new Map();

  input.forEach(elem => {
    let [company, id] = elem.split(' -> ');

    if (!companies.has(company)) {
      companies.set(company, new Set());
    }

    companies.get(company).add(id);
  });

  Array.from(companies)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([company, employees]) => {
      console.log(company);
      Array.from(employees)
        .forEach(employee => {
          console.log(`-- ${employee}`);
        });
    });
}

console.log('---------------------- Test 1  ----------------------');
companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345'
]);

/* 
  HP
  -- BB12345
  Microsoft
  -- CC12345
  SoftUni
  -- AA12345
  -- BB12345
*/

console.log('---------------------- Test 2  ----------------------');
companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111'
]);

/* 
  Lenovo
  -- XX23456
  Movement
  -- DD11111
  SoftUni
  -- AA12345
  -- CC12344
*/