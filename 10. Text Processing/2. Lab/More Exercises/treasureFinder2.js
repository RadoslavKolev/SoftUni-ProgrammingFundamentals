//  RegExp variant

function treasureFinder(input) {
  const key = input.shift().split(' ').map(Number);
  const keyLength = key.length;
  const regexType = /(?<=&).*(?=&)/g;
  const regexCoord = /(?<=<).*(?=>)/g;

  for (const message of input) {
    if (message === 'find') {
      break;
    }

    let index = 0;
    const messageArr = message.split('');
    const messageLength = messageArr.length;

    for (let i = 0; i < messageLength; i++) {
      if (index === keyLength) {
        index = 0;
      }

      let codeToReplace = messageArr[i].charCodeAt() - key[index];
      let letterToReplace = String.fromCharCode(codeToReplace);
      messageArr[i] = letterToReplace
      index++;
    }

    const decryptedMessage = messageArr.join('');
    const type = decryptedMessage.match(regexType);
    const coordinates = decryptedMessage.match(regexCoord);

    console.log(`Found ${type.join()} at ${coordinates.join()}`);
  }
}

console.log('---------------------Test 1---------------------');
treasureFinder([
  '1 2 1 3',
  'ikegfp\'jpne)bv=41P83X@',
  'ujfufKt)Tkmyft\'duEprsfjqbvfv=53V55XA',
  'find'
]);

/* 
  Found gold at 10N70W
  Found Silver at 32S43W
*/

console.log('---------------------Test 2---------------------');
treasureFinder([
  '1 4 2 5 3 2 1',
  'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
  'tsojPqsf$(lrne\'$CYfqpshksdvfT$>634O57YC',
  '\'stj)>34W68Z@',
  'find'
]);

/* 
  262
*/