function modernTimes(text) {
  const specialWords = text.split(' ')
    .filter(word => word.startsWith('#') && word.length > 1)
    .map(word => word.slice(1));

  let isValid = true;

  for (const word of specialWords) {
    let wordLower = word.toLowerCase();
    let len = wordLower.length;

    for (let i = 0; i < len; i++) {
      if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      console.log(word);
    }

    isValid = true;
  }
}

console.log('---------------------Test 1---------------------');
modernTimes(
  'Nowadays everyone uses # to tag a #special word in #socialMedia #social@12Media'
);

/* 
  special
  socialMedia
*/

console.log('---------------------Test 2---------------------');
modernTimes(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);

/* 
  variously
  regions
  number
*/