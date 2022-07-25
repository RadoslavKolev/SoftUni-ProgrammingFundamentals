function santasSecretHelper(input) {
  const key = Number(input.shift());
  const pattern = /@(?<name>[A-Za-z]+)[^@!:>-]*!(?<behavior>[GN])!/

  for (const message of input) {
    if (message === 'end') break;

    // Decrypting the message
    const decrypted = message
      .split('')
      .map(letter => String.fromCharCode(letter.charCodeAt() - key))
      .join('');

    const validMessage = pattern.exec(decrypted);

    if (!validMessage) continue;

    const {name, behavior} = validMessage.groups;

    if (behavior === 'G') {
      console.log(name);
    } 
  }
}

console.log('----------------------Test 1----------------------');
santasSecretHelper([
  '3',
  'CNdwhamigyenumje$J$',
  'CEreelh-nmguuejnW$J$',
  'CVwdq&gnmjkvng$Q$',
  'end'
]);

/* 
  Kate
  Bobbie
*/

console.log('----------------------Test 2----------------------');
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