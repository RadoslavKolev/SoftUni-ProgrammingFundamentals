function secretChat(input) {
  let message = input.shift();
  
  const insertSpace = (str, index) => {
    return str.slice(0, index) + ' ' + str.slice(index);
  };

  const reverse = (str, substring) => {
    str = str.replace(substring, '');
    substring = substring.split('').reverse().join('');
    return str + substring;
  };

  const changeAll = (str, substring, replacement) => {
    const regex = new RegExp(substring, 'g');
    return str.replace(regex, replacement);
  };

  for (const elem of input) {
    if (elem === 'Reveal') break;

    const [command, ...rest] = elem.split(':|:');

    switch (command) {
      case 'InsertSpace':
        const index = Number(rest[0]);
        message = insertSpace(message, index);
        break;
      case 'Reverse':
        const substring = rest[0];

        if (!message.includes(substring)) {
          console.log('error');
          continue;
        }

        message = reverse(message, substring);
        break;
      case 'ChangeAll':
        const substr = rest[0];
        const replacement = rest[1];
        message = changeAll(message, substr, replacement);
        break;
      default:
        console.log('No such command!');
        continue;
    }

    console.log(message);
  }

  console.log(`You have a new text message: ${message}`);
}

console.log('------------------ Test 1 ------------------');
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
]);

/* 
  hellodar!gnil
  hellodarling!
  hello darling!
  You have a new text message: hello darling!
*/

console.log('------------------ Test 2 ------------------');
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]);

/* 
  Howare?uoy
  Howareyou?
  error
  How areyou?
  How are you?
  You have a new text message: How are you?
*/