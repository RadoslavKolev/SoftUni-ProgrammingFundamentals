function theImitationGame(input) {
  let decryptedMessage = input.shift();

  const move = (str, n) => str.slice(n) + str.slice(0, n);

  const insert = (str, i, value) => str.slice(0, i) + value + str.slice(i);
  
  const changeAll = (str, substring, replacement) => {
    while (str.includes(substring)) {
      str = str.replace(substring, replacement);
    }

    return str;
  };

  for (const elem of input) {
    if (elem === 'Decode') break;

    const [command, value1, value2] = elem.split('|');

    switch (command) {
      case 'Move':
        const numberOfLetters = Number(value1);
        decryptedMessage = move(decryptedMessage, numberOfLetters);
        break;
      case 'Insert':
        const index = Number(value1);
        const value = value2;
        decryptedMessage = insert(decryptedMessage, index, value);
        break;
      case 'ChangeAll':
        const textToReplace = value1;
        const replacement = value2;
        decryptedMessage = changeAll(decryptedMessage, textToReplace, replacement);
        break;
      default:
        console.log('No such command!');
        continue;
    }
  }

  console.log(`The decrypted message is: ${decryptedMessage}`);
}

console.log('-----------------------------Test 1-----------------------------');
theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]);

// The decrypted message is: Hello

console.log('-----------------------------Test 2-----------------------------');
theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);

// The decrypted message is: howareyou?