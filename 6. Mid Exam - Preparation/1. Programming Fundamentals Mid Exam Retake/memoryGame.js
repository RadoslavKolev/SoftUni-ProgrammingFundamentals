function memory(input) {
  let sequence = input[0].split(' ');
  let i = 1;

  while (input[i] !== 'end') {
    let currentIndex = input[i].split(' ');
    let first = Number(currentIndex[0])
    let second = Number(currentIndex[1])
    if ((first === second) || (first < 0 || first >= sequence.length || second < 0 || second >= sequence.length)) {

      let indexToPlace = Math.floor(sequence.length / 2)
      sequence.splice(indexToPlace, 0, `-${i}a`, `-${i}a`);
      console.log(`Invalid input! Adding additional elements to the board`);
      i++
      continue;
    }
    let num1 = sequence[first];
    let num2 = sequence[second];
    if (num1 === num2) {
      let a = sequence.splice(first, 1);
      second = sequence.indexOf(num2);
      sequence.splice(second, 1);

      console.log(`Congrats! You have found matching elements - ${a}!`);

    } else {
      console.log('Try again!');
    }
    if (sequence.length < 1) {
      console.log(`You have won in ${i} turns!`);
      break;
    }


    i++;


  }
  if (sequence.length > 0) {
    console.log(`Sorry you lose :(`);
    console.log(sequence.join(' '));
  }
}

// memory([
//   "a 2 4 a 2 4", 
//   "0 3", 
//   "0 2",
//   "0 1",
//   "0 1", 
//   "end"
// ]);
memory([
  "a 2 4 a 2 4",
  "0 3",
  "0 2",
  "0 1",
  "0 1",
  "end"
]);

// "2 4 a 2 4"