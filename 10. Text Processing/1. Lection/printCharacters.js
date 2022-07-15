function printCharacters(word) {
  for (const letter of word) {
    console.log(letter);
  }
}

console.log('------------------Test 1------------------');
printCharacters('AWord');

console.log('------------------Test 2------------------');
printCharacters('Sentence');