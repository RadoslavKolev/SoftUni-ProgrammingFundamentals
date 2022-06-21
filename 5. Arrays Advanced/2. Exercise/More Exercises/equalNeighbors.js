function equalNeighbors(matrix) {
  let countNeighbors = 0;
  for (let row = 0; row < matrix.length - 1; row++) {
    let currentArr = matrix[row];
    for (let col = 0; col < currentArr.length; col++) {
      if (matrix[row][col] === matrix[row + 1][col]) {
        countNeighbors++;
      }
      if (matrix[row][col] === matrix[row][col + 1]) {
        countNeighbors++;
      }
      if (row === matrix.length - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
        countNeighbors++;
      }
    }
  }
  console.log(countNeighbors);
}

equalNeighbors([
  ['2', '3', '4', '7', '0'],
  ['4', '0', '5', '3', '4'],
  ['2', '3', '5', '4', '2'],
  ['9', '8', '7', '5', '4']
]);

equalNeighbors([
  ['test', 'yo', 'yo', 'ho'],
  ['well', 'done', 'no', '6'],
  ['not', 'done', 'yet', '5']
]);