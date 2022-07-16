function replaceRepeatingChars(text) {
  let output = '';
  const len = text.length;

  for (let i = 0; i < len; i++) {
    if (text[i] === text[i + 1]) {
      continue;
    }

    output += text[i];
  }

  console.log(output);
}

console.log('---------------------Test 1---------------------');
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');

/* 
  abcdedsa
*/

console.log('---------------------Test 2---------------------');
replaceRepeatingChars('qqqwerqwecccwd');

/* 
  qwerqwecwd
*/