function passwordReset(arr) {
  let message = arr.shift();

  for (const line of arr) {
    if (line === 'Done') {
      break;
    }

    if (line === 'TakeOdd') {
      let password = '';

      for (let i = 0; i < message.length; i++) {
        if (i % 2 !== 0) {
          password += message[i];
        }
      }

      message = password;
      console.log(message);
    } else if (line.includes('Cut')) {
      let newLine = line.replace('Cut ', '');
      let [index, length] = newLine.split(' ').map(Number);
      let stringToRemove = message.substring(index, index + length);
      message = message.replace(stringToRemove, '');
      console.log(message);
    } else if (line.includes('Substitute')) {
      let newLine = line.replace('Substitute ', '');
      let [subString, substitute] = newLine.split(' ');

      if (!message.includes(subString)) {
        console.log(`Nothing to replace!`);
        continue;
      }

      while (message.includes(subString)) {
        message = message.replace(subString, substitute);
      }

      console.log(message);
    }
  }

  console.log(`Your password is: ${message}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"
]);

console.log('-----------Test 2-------------');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"
]);