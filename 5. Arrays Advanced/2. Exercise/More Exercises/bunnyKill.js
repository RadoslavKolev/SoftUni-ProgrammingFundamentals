function bunnyKill(input) {
  let bombCells = input.pop()
                       .split(' ')
                       .map(str => str.split(',')
                                      .map(Number));

  let matrix = input.map(row => row.split(' ').map(Number));
  
  let snowballDamage = 0;
  let bunniesKilled = 0;

  for (let i = 0; i < bombCells.length; i++) {
    let bombRow = bombCells[i][0];
    let bombColumn = bombCells[i][1];
    let bomb = matrix[bombRow][bombColumn];

    if (bomb <= 0) {
      continue;
    }

    let startRow = Math.max(0, bombRow - 1);
    let endRow = Math.min(bombRow + 1, input.length - 1);

    for (let row = startRow; row <= endRow; row++) {
      let startCol = Math.max(0, bombColumn - 1);
      let endCol = Math.min(bombColumn + 1, input[row].length - 1);
 
      for (let col = startCol; col <= endCol; col++) {
        matrix[row][col] -= bomb;
      }
    }

    bunniesKilled++;
    snowballDamage += bomb;
  }
  

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        bunniesKilled++;
        snowballDamage += matrix[row][col];
      }
    }
  }

  console.log(snowballDamage);
  console.log(bunniesKilled);
}

bunnyKill([
  '5 10 15 20',
  '10 10 10 10',
  '10 15 10 10',
  '10 10 10 10',
  '2,2 0,1'
]);

bunnyKill([
  '10 10 10',
  '10 10 10',
  '10 10 10',
  '0,0'
]);