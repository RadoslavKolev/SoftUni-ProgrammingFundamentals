function stringGame(input) {
  let text = input.shift();

  function change(str, char, replacement) {
    const regex = new RegExp(char, 'g');
    str = str.replace(regex, replacement);
    console.log(str);
    return str;
  }

  function includes(str, substring) {
    let message = '';

    if (str.includes(substring)) {
      message = 'True';
    } else {
      message = 'False';
    } 

    console.log(message);
  } 

  function end(str, substring) {
    let message = '';

    if (str.endsWith(substring)) {
      message = 'True';
    } else {
      message = 'False';
    } 

    console.log(message);
  }

  function uppercase(str) {
    str = str.toUpperCase();
    console.log(str);
    return str;
  } 

  function findIndex(str, char) {
    const firstOccurrence = str.indexOf(char);
    console.log(firstOccurrence);
  }

  function cut(str, startIndex, count) {
    str = str.slice(startIndex, startIndex + count);
    console.log(str);
    return str;
  }

  for (const elem of input) {
    if (elem === 'Done') break;

    const [command, ...rest] = elem.split(' ');

    switch (command) {
      case 'Change':
        const charToChange = rest[0];
        const replacement = rest[1];
        text = change(text, charToChange, replacement);
        break;
      case 'Includes':
        const substring = rest[0];
        includes(text, substring);
        break;
      case 'End':
        const substr = rest[0];
        end(text, substr);
        break;
      case 'Uppercase':
        text = uppercase(text);
        break;
      case 'FindIndex':
        const charToFind = rest[0];
        findIndex(text, charToFind);
        break;
      case 'Cut':
        const startIndex = Number(rest[0]);
        const count = Number(rest[1]);
        text = cut(text, startIndex, count);
        break;
      default:
        console.log('No such command!');
        continue;
    }
  }
}

console.log('----------------- Test 1 -----------------');
stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done"
]);

/*
  //This is my string!//
  True
  False
  //THIS IS MY STRING!//
  4
  S IS
*/

console.log('----------------- Test 2 -----------------');
stringGame([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done"
]);

/* 
  *S0ftUni is the B3St Plac3**
  False
  False
  *S0FTUNI IS THE B3ST PLAC3**
  21
  FTUNI I
*/