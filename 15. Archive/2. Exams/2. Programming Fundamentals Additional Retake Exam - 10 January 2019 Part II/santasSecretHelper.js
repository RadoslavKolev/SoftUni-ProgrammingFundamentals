function santasSecretHelper(input) {
  const key = Number(input.shift());
  const goodChildren = [];
  const pattern = /@(?<name>[A-Za-z]+)[^@!:>-]*!(?<behavior>[GN])!/;

  for (const elem of input) {
    if (elem === 'end') break;

    let decryptedMessage = '';

    for (const letter of elem) {
      decryptedMessage += String.fromCharCode(letter.charCodeAt() - key);
    }

    const validMatch = pattern.exec(decryptedMessage);

    if (!validMatch) continue;

    const {name, behavior} = validMatch.groups;
    
    if (behavior === 'G') {
      goodChildren.push(name);
    }
  }

  console.log(goodChildren.join('\n'));
}

console.log('------------- Test 1 -------------');
santasSecretHelper([
  '3',
  'CNdwhamigyenumje$J$',
  'CEreelh-nmguuejn$J$',
  'CVwdq&gnmjkvng$Q$',
  'end'
]);

/* 
  Kate
  Bobbie
*/

console.log('------------- Test 2 -------------');
santasSecretHelper([
  '3',
  'N}eideidmk$\'(mnyenmCNlpamnin$J$',
  'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
  'ppqmkkkmnolmnnCEhq/vkievk$Q$',
  'yyegiivoguCYdohqwlqh/kguimhk$J$',
  'end'
]);

/* 
  Kim
  Connor
  Valentine
*/