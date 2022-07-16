function pascalCaseSplitter(text) {
  let output = '';
  const len = text.length;

  for (let i = 0; i < len; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 && i !== 0) {
      output += ', ' + text[i];
    } else {
      output += text[i];
    }
  }

  console.log(output);
}

console.log('---------------------Test 1---------------------');
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

/* 
   Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
*/

console.log('---------------------Test 2---------------------');
pascalCaseSplitter('HoldTheDoor');

/* 
  Hold, The, Door
*/

console.log('---------------------Test 3---------------------');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');

/* 
  This, Is, So, Annoying, To, Do
*/