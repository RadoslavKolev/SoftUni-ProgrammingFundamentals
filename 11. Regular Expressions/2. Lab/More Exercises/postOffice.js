function postOffice(input) {
  const [first, second, third] = input[0].split('|');
  const capitalPattern = /([#$%*&])[A-Z]+\1/g;

  // Puts the capital letters in array and removes their surrounder
  const capitalLetters = first
    .match(capitalPattern)
    .join('')
    .replace(/[#$%*&]/g, '')
    .split('');

  // Sets the unique numbers
  const validNumbers = new Set(second.match(/\d+:\d{2}/g));
  const wordsToCheck = third.split(' ');

  // Saves the starting letter and length of the expected word
  const expectedWordsObj = {};

  // First we iterate through capitalLetters, because the output wants so
  for (const letter of capitalLetters) {
    // Fills the object with data
    for (const item of validNumbers) {
      let [asciiCode, wordLength] = item.split(':');
  
      // if the number starts with leading 0, it removes it
      if (wordLength.startsWith('0')) {
        wordLength = wordLength.replace('0', '');
      }
  
      asciiCode = Number(asciiCode);
      wordLength = Number(wordLength) + 1;  // +1 includes the capital letter
      const letter = String.fromCharCode(asciiCode); // expected letter
  
      if (!capitalLetters.includes(letter)) continue;
  
      expectedWordsObj[letter] = wordLength;
    }

    if (!expectedWordsObj.hasOwnProperty(letter)) continue;

    // We take the expected word length from the object
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