function melrahShake(input) {
  let text = input[0];
  let pattern = input[1];

  while (pattern.length > 0) {
    let firstMatch = text.indexOf(pattern);
    let lastMatch = text.lastIndexOf(pattern);

    if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {
      text = text.split('');
      text.splice(firstMatch, pattern.length);
      text = text.join('');
      lastMatch = text.lastIndexOf(pattern);
      text = text.split('')
      text.splice(lastMatch, pattern.length)
      let removeFromPattern = pattern[Math.floor(pattern.length / 2)]
      pattern = pattern.replace(removeFromPattern, '');
      text = text.join('')
      console.log('Shaked it.');
    } else {
      break;
    }
  }

  console.log('No shake.');
  console.log(text);
}

console.log('---------------------Test 1---------------------');
melrahShake([
  'astalavista baby',
  'sta'
]);

/* 
  Shaked it.
  No shake.
  alavi baby
*/

console.log('---------------------Test 2---------------------');
melrahShake([
  '##mtm!!mm.mm*mtm.#',
  'mtm'
]);

/* 
  Shaked it.
  Shaked it.
  No shake.
  ##!!.*.#
*/