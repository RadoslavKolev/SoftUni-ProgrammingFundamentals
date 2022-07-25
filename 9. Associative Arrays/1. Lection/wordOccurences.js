function wordOccurrences(input) {
  const words = new Map();

  for (const wordToCheck of input) {
    let counter = 0;

    if (words.has(wordToCheck)) continue;

    input.forEach(word => {
      if (word === wordToCheck) {
        counter++;
      }
    });

    words.set(wordToCheck, counter);
  }

  console.table(words);

  Array.from(words)
    .sort((a, b) => b[1] - a[1])
    .forEach(([key, value]) => {
      console.log(`${key} -> ${value} times`);
    });
}


// Test 1
console.log('\n----------------------------Test 1----------------------------\n');

wordOccurrences([
  "Here", "is", "the", "first", "sentence",
  "Here", "is", "another", "sentence", "And",
  "finally", "the", "third", "sentence"
]);

/* Results:
  sentence -> 3 times
  Here -> 2 times
  is -> 2 times
  the -> 2 times
  first -> 1 times
  another -> 1 times
  And -> 1 times
  finally -> 1 times
  third -> 1 times
*/

// Test 2
console.log('\n----------------------------Test 2----------------------------\n');

wordOccurrences([
  "dog", "bye", "city", "dog", "dad",
  "boys", "ginger"
]);

/* Results:
  dog -> 2 times
  bye -> 1 times
  city -> 1 times
  dad -> 1 times
  boys -> 1 times
  ginger -> 1 times
*/