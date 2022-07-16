function cutAndReverse(text) {
  const reversedText = text.split('').reverse().join('');
  const len = reversedText.length;
  const halfLength = len / 2;
  let output = '';

  for (let i = halfLength; i < len; i++) {
    output += reversedText[i];
  }

  output += '\n';

  for (let i = 0; i < halfLength; i++) {
    output += reversedText[i];
  }

  console.log(output);
}

console.log('---------------------Test 1---------------------');
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');

/* 
  ThisIsDifficult
  ThisIsSoAmazing
*/

console.log('---------------------Test 2---------------------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

/* 
  IBetYouCantDoThis
  ImSoGoodAtThisJob
*/