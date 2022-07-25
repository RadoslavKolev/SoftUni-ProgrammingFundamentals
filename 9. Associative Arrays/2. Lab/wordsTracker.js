function wordTracker(input) {
  const words = input.shift().split(' ');
  const tracker = new Map();

  words.forEach(word => {
    let counter = 0;

    input.forEach(wordToCheck => {
      if (wordToCheck === word) {
        counter++;
      }
    });

    tracker.set(word, counter);
  });

  Array.from(tracker)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, occurrences]) => {
      console.log(`${word} - ${occurrences}`);
    }
  );
}

console.log('---------------------- Test 1  ----------------------');
wordTracker([
  'this sentence',
  'In', 'this', 'sentence', 'you', 'have',
  'to', 'count', 'the', 'occurrences', 'of',
  'the', 'words', 'this', 'and', 'sentence',
  'because', 'this', 'is', 'your', 'task'
]);

/* 
  this - 3
  sentence - 2
*/

console.log('---------------------- Test 2  ----------------------');
wordTracker([
  'is the',
  'first', 'sentence', 'Here', 'is',
  'another', 'the', 'And', 'finally', 'the',
  'the', 'sentence'
]);

/* 
  the - 3
  is - 1
*/