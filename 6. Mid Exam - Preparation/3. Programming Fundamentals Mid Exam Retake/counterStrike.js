function counterStrike(arr) {
 
  let energy = Number(arr.shift());
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];

    if (command !== 'End of battle') {
        let points = Number(command);
        if (energy >= points) {
            energy -= points;
            counter++;
            if (counter % 3 === 0) {
                energy += counter;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            break;
        }
    } else {
        console.log(`Won battles: ${counter}. Energy left: ${energy}`);
    }
  }
}

counterStrike(["100",
  "10",
  "10",
  "10",
  "1",
  "2",
  "3",
  "73",
  "10"
]);

counterStrike(["200",
  "54",
  "14",
  "28",
  "13",
  "End of battle"
]);