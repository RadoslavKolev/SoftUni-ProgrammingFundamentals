function treasureFinder(input) {
  const key = input.shift().split(' ').map(Number);
  const keyLength = key.length;

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
    console.log(decryptedMessage);
    let type = '';
    let coordinates = '';
    let flagType = false;
    let flagCoord = false;

    for (const letter of decryptedMessage) {
      if (letter === '&') {
        flagType = !flagType;
        continue;
      } else if (letter === '>') {
        flagCoord = false;
        break;
      } else if (letter === '<') {
        flagCoord = true;
        continue;
      }

      if (flagType) {
        type += letter;
      }

      if (flagCoord) {
        coordinates += letter;
      }
    }

    console.log(`Found ${type} at ${coordinates}`);
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
  Found gold at 0S123E
  Found gold at 102N43W
  Found ore at 23S43W
*/