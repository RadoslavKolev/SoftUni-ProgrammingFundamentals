function revealWords(words, text) {
  const wordsArr = words.split(', ');
  const textArr = text.split(' ');
  const len = textArr.length;

  for (const word of wordsArr) {
    for (let i = 0; i < len; i++) {
      if (textArr[i].startsWith('*') && word.length === textArr[i].length) {
        textArr[i] = word;
      }
    }
  }

  console.log(textArr.join(' '));
}

console.log('---------------------Test 1---------------------');
revealWords(
  'great',
  'softuni is ***** place for learning new programming languages'
);

// softuni is great place for learning new programming languages

console.log('---------------------Test 2---------------------');
revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);

// softuni is great place for learning new programming languages