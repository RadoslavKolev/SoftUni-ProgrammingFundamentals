function passwordGenerator(input) {
  let password = input[0].concat(input[1]);
  let word = input[2];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let index = 0;
  
  for (const letter of password) {
    if (vowels.includes(letter)) {
      if (index === word.length) {
        index = 0;
      }

      password = password.replace(letter, word[index].toUpperCase());
      index++;
    }
  }

  password = password.split('').reverse().join('');
  console.log(`Your generated password is ${password}`);
}

console.log('---------------------Test 1---------------------');
passwordGenerator([
  'ilovepizza',
  'ihatevegetables',
  'orange'
]);

/* 
  Your generated password is 
  sElbGtNgAvRtOhEGzzNpAvRlO
*/

console.log('---------------------Test 2---------------------');
passwordGenerator([
  'easymoneyeazylife',
  'atleasttencharacters',
  'absolute'
]);

/* 
  Your generated password is 
  srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA
*/

console.log('---------------------Test 3---------------------');
passwordGenerator([
  'areyousureaboutthisone',
  'notquitebutitrustyou',
  'disturbed'
]);

/* 
  Your generated password is 
  SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD
*/