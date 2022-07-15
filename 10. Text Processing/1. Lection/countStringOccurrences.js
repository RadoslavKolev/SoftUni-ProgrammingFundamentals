function countStringOccurrences(text, wordToCheck) {
  const textArr = text.split(' ');
  let occurrences = 0;

  for (const word of textArr) {
    if (word === wordToCheck) {
      occurrences++;
    }
  }

  console.log(occurrences);
}

console.log('------------------Test 1------------------');
countStringOccurrences(
  'This is a word and it also is a sentence',
  'is'
);

// 2

console.log('------------------Test 2------------------');
countStringOccurrences(
  'softuni is great place for learning new programming languages',
  'softuni'
);

// 1