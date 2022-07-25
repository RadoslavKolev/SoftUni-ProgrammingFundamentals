function schoolGrades(input) {
  const map = new Map();

  input.forEach(elem => {
    const tokens = elem.split(' ');
    const name = tokens.shift();
    const grades = tokens.map(Number);

    if (!map.has(name)) {
      map.set(name, grades);
    } else {
      const existingGrades = map.get(name);
      grades.forEach(x => existingGrades.push(x));
    }
  });

  const sorted = Array.from(map)
    .sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, grades] of sorted) {
    let avgGrade = 0;
    grades.forEach(x => avgGrade += x);
    avgGrade /= grades.length;

    console.log(`${name}: ${avgGrade.toFixed(2)}`);
  }
}

// Test 1
console.log('\n----------------------------Test 1----------------------------\n');

schoolGrades([
  'Lilly 4 6 6 5',
  'Tim 5 6',
  'Tammy 2 4 3',
  'Tim 6 6'
]);

/* Results:
  Lilly: 5.25
  Tammy: 3.00
  Tim: 5.75
*/

// Test 2
console.log('\n----------------------------Test 2----------------------------\n');

schoolGrades([
  'Steven 3 5 6 4',
  'George 4 6',
  'Tammy 2 5 3',
  'Steven 6 3'
]);

/* Results:
  George: 5.00
  Steven: 4.50
  Tammy: 3.33
*/