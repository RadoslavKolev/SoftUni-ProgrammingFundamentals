function passwordReset(input) {
  let password = input.shift();

  const takeOdd = str => {
    let newPassword = '';
    const len = str.length;

    for (let i = 0; i < len; i++) {
      if (i % 2 !== 0) {
        newPassword += str[i];
      }
    }

    return newPassword;
  };

  const cut = (str, index, len) => str.slice(0, index) + str.slice(index + len);

  const substituteFunc = (str, substring, substitute) => {
    const regex = new RegExp(substring, 'g');
    return str.replace(regex, substitute);
  };

  for (const elem of input) {
    if (elem === 'Done') break;

    const [command, ...rest] = elem.split(' ');

    switch (command) {
      case 'TakeOdd':
        password = takeOdd(password);
        break;
      case 'Cut':
        const index = Number(rest[0]);
        const length = Number(rest[1]);
        password = cut(password, index, length);
        break;
      case 'Substitute':
        const substring = rest[0];

        if (!password.includes(substring)) {
          console.log('Nothing to replace!');
          continue;
        }

        const substitute = rest[1];
        password = substituteFunc(password, substring, substitute);
        break;
      default:
        console.log('No such command!');
        continue;
    }

    console.log(password);
  }

  console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"
]);

/*
  icecream::hot::summer
  icecream::hot::mer
  icecream-hot-mer
  Nothing to replace!
  Your password is: icecream-hot-mer
*/

console.log('-----------Test 2-------------');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"
]);

/*
  programming!is!funny
  programming!is!fun
  programming***is***fun
  Nothing to replace!
  Your password is: programming***is***fun
*/