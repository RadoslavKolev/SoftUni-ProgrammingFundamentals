function mirrorWords(input) {
  const text = input[0];
  const pattern = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
  const mirrorWordsArr = [];
  let counter = 0;
  let pairsMessage = '';
  let mirrorWordsMessage = '';
  let foundMatch;

  while ((foundMatch = pattern.exec(text)) !== null) {
    counter++;
    const word1 = foundMatch.groups.word1;
    const word2 = foundMatch.groups.word2;
    const reversed = word2.split('').reverse().join('');

    if (word1 === reversed) {
      mirrorWordsArr.push(`${word1} <=> ${word2}`);
    }
  }

  if (counter === 0) {
    pairsMessage = 'No word pairs found!';
  } else {
    pairsMessage = `${counter} word pairs found!`;
  }

  if (mirrorWordsArr.length === 0) {
    mirrorWordsMessage = 'No mirror words!';
  } else {
    mirrorWordsMessage = 'The mirror words are:\n' + mirrorWordsArr.join(', ');
  }

  console.log(pairsMessage);
  console.log(mirrorWordsMessage);
}

console.log('------------------ Test 1 ------------------');
mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

/* 
  5 word pairs found!
  The mirror words are:
  Part <=> traP, leveL <=> Level, sAw <=> wAs
*/

console.log('------------------ Test 2 ------------------');
mirrorWords([
  '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);

/* 
  2 word pairs found!
  No mirror words!
*/

console.log('------------------ Test 3 ------------------');
mirrorWords([
  '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);

/* 
  No word pairs found!
  No mirror words!
*/