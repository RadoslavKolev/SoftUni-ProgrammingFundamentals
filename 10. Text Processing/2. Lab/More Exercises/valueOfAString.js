function valueOfAString(input) {
  let text = input[0];
  let command = input[1];
  let sum = 0;
  let regex;

  switch (command) {
    case 'UPPERCASE':
      regex = /[A-Z]/g;
      break;
    case 'LOWERCASE':
      regex = /[a-z]/g;
      break;
    default:
      console.log('No such command!');
      return;
  }

  text.match(regex)
    .forEach(letter => {
      sum += letter.charCodeAt();
    }
  );

  console.log(`The total sum is: ${sum}`);
}

console.log('---------------------Test 1---------------------');
valueOfAString([
  'HelloFromMyAwesomePROGRAM',
  'LOWERCASE'
]);

/* 
  The total sum is: 
  1539
*/

console.log('---------------------Test 2---------------------');
valueOfAString([
  'AC/DC',
  'UPPERCASE'
]);

/* 
  The total sum is: 
  267
*/