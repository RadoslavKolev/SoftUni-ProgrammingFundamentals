function asciiSumator(input) {
  const firstCode = input[0].charCodeAt();
  const secondCode = input[1].charCodeAt();
  const text = input[2];
  const start = Math.min(firstCode, secondCode);
  const end = Math.max(firstCode, secondCode);
  let sum = 0;

  for (const letter of text) {
    const currentCode = letter.charCodeAt();

    if (currentCode > start && currentCode < end) {
      sum += currentCode;
    }
  }

  console.log(sum);
}

console.log('---------------------Test 1---------------------');
asciiSumator([
  '.',
  '@',
  'dsg12gr5653feee5'
]);

/* 
  363
*/

console.log('---------------------Test 2---------------------');
asciiSumator([
  '?',
  'E',
  '@ABCEF'
]);

/* 
  262
*/

console.log('---------------------Test 3---------------------');
asciiSumator([
  'a',
  '1',
  'jfe392$#@j24ui9ne#@$'
]);

/* 
  445
*/