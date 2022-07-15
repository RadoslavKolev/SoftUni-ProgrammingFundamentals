function substring(word, startIndex, count) {
  let newWord = word.slice(startIndex, startIndex + count);
  console.log(newWord);
}

console.log('------------------Test 1------------------');
substring('ASentence', 1, 8);   // Sentence

console.log('------------------Test 2------------------');
substring('SkipWord', 4, 7);    // Word