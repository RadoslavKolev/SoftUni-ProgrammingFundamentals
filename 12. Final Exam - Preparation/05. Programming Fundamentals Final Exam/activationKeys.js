function activationKeys(input) {
  let activationKey = input.shift();

  const contains = (str, substring) => {
    if (str.includes(substring)) return true; 

    return false;
  };

  const flip = (str, command, start, end) => {
    let substring = str.slice(start, end);

    if (command === 'Upper') {
      substring = substring.toUpperCase();
    } else {
      substring = substring.toLowerCase();
    }

    return str.slice(0, start) + substring + str.slice(end);
  };

  const sliceFunc = (str, start, end) => {
    const substring = str.slice(start, end);
    return str.replace(substring, '');
  };

  for (const elem of input) {
    if (elem === 'Generate') break;

    const [command, ...rest] = elem.split('>>>');

    switch (command) {
      case 'Contains':
        const substring = rest[0];
        const isThere = contains(activationKey, substring);
        let message = '';

        if (isThere) {
          message = `${activationKey} contains ${substring}`;
        } else {
          message = 'Substring not found!';
        }

        console.log(message);
        continue;
      case 'Flip':
        const transform = rest[0];
        const startIndex = Number(rest[1]);
        const endIndex = Number(rest[2]);
        activationKey = flip(activationKey, transform, startIndex, endIndex);
        break;
      case 'Slice':
        const start = Number(rest[0]);
        const end = Number(rest[1]);
        activationKey = sliceFunc(activationKey, start, end);
        break;
      default:
        console.log('No such command!');
        continue;
    }

    console.log(activationKey);
  }

  console.log(`Your activation key iconsole.log('-------------------- Test 1 --------------------');
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate"
]);

/* 
  abghijklmnopqrstuvwxyz
  abgHIJKLMNOPQRstuvwxyz
  abgHIjkLMNOPQRstuvwxyz
  Substring not found!
  Substring not found!
  Your activation key is: abgHIjkLMNOPQRstuvwxyz
*/

console.log('-------------------- Test 2 --------------------');
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate"
]);

/* 
  134sf5ftuni2020rockz42
  Substring not found!
  Substring not found!
  Substring not found!
  134SF5FTuni2020rockz42
  134SF5ftuni2020rockz42
  Your activation key is: 134SF5ftuni2020rockz42
*/s: ${activationKey}`);
}

console.log('-------------------- Test 1 --------------------');
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate"
]);

/* 
  abghijklmnopqrstuvwxyz
  abgHIJKLMNOPQRstuvwxyz
  abgHIjkLMNOPQRstuvwxyz
  Substring not found!
  Substring not found!
  Your activation key is: abgHIjkLMNOPQRstuvwxyz
*/

console.log('-------------------- Test 2 --------------------');
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate"
]);

/* 
  134sf5ftuni2020rockz42
  Substring not found!
  Substring not found!
  Substring not found!
  134SF5FTuni2020rockz42
  134SF5ftuni2020rockz42
  Your activation key is: 134SF5ftuni2020rockz42
*/