function censoredWords(sentence, word) {
  let stars = '*';

  while (sentence.includes(word)) {
    sentence = sentence.replace(word, stars.repeat(word.length))
  }

  console.log(sentence);
}

console.log('------------------Test 1------------------');
censoredWords('A small sentence with some words', 'small');

// A ***** sentence with some words

console.log('------------------Test 2------------------');
censoredWords('Find the hidden word', 'hidden');

// Find the ****** word