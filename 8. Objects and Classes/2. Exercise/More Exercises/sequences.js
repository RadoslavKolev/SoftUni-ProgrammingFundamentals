function sequences(input) {
  // Converting JSON strings to Arrays
  input = input.map(el => JSON.parse(el));

  // Sorting the arrays in descending order
  input.forEach(arr => arr.sort((a, b) => b - a));

  // Holds the unique arrays
  const uniqueArrays = [];  
  const len = input.length; 

  for (let i = 0; i < len; i++) {
    const currentArray = input[i];
    const uniqueLen = uniqueArrays.length;
    let isUnique = true;

    // Loops through the unique arrays
    for (let j = 0; j < uniqueArrays.length; j++) {
      const arrToCheck = uniqueArrays[j];

      if (arrToCheck.toString() === currentArray.toString()) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueArrays.push(currentArray);
    }
  }

  // Sorting the arrays by length and printing on the console
  uniqueArrays.sort((a, b) => a.length - b.length)
    .forEach(el => console.log(`[${el.join(', ')}]`));
}

// Test 1 
console.log('\n----------------Test 1----------------\n');

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]"
]);

/* Results: 
  [13, 10, 2, 1, 0, -17]
  [4, 3, 2, 1, 0, -1, -2, -3]
*/

// Test 2 
console.log('\n----------------Test 2----------------\n');

sequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]"
]);

/* Results: 
  [80.099, 7.339, 7.18, 7.14]
*/