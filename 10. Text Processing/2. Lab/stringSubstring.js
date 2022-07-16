function stringSubstring(word, text) {
  const textArr = text.split(' ');

  for (const wordToCheck of textArr) {
    if (word.toLowerCase() === wordToCheck.toLowerCase()) {
      console.log(word);
      return;
    }
  }

  console.log(`${word} not found!`);
}

console.log('---------------------Test 1---------------------');
stringSubstring(
  'javascript',
  'JavaScript is the best programming language'
);

/* 
  javascript
*/

console.log('---------------------Test 2---------------------');
stringSubstring(
  'python',
  'JavaScript is the best programming language'
);

/* 
  python not found!
*/