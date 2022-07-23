function postOffice(input) {
  const [first, second, third] = input[0].split('|');
  const capitalPattern = /([#$%*&])[A-Z]+\1/g;
  const capitalLetters = first
    .match(capitalPattern)
    .join('')
    .replace(/[#$%*&]/g, '')
    .split('');

  const validNumbers = new Set(second.match(/\d+:\d{2}/g));
  const wordsToCheck = third.split(' ');
  const expectedWordsObj = {};

  for (const letter of capitalLetters) {
    for (const item of validNumbers) {
      let [asciiCode, wordLength] = item.split(':');
  
      if (wordLength.startsWith('0')) {
        wordLength = wordLength.replace('0', '');
      }
  
      asciiCode = Number(asciiCode);
      wordLength = Number(wordLength) + 1;
      const letter = String.fromCharCode(asciiCode);
  
      if (!capitalLetters.includes(letter)) continue;
  
      expectedWordsObj[letter] = wordLength;
    }

    if (!expectedWordsObj.hasOwnProperty(letter)) continue;

    const wordLength = expectedWordsObj[letter];

    for (const word of wordsToCheck) {
      if (word.startsWith(letter) && word.length === wordLength) {
        console.log(word);
        break;
      }
    }
  }
}

console.log('----------------------Test 1----------------------');
postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);

/* 
  Argo
  Or
  The
  Parahaos
*/

console.log('----------------------Test 2----------------------');
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);

/* 
  Post
  Office
  Ankh-Morpork
  Mister
  Lipwig
*/