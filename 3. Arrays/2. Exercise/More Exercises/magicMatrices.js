function magicMatrices(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    let sumRowOne = matrix[i].reduce((a, b) => a + b, 0);
    let sumRowTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
    let sumColumnOne = 0;
    let sumColumnTwo = 0;

    for (let j = 0; j < matrix.length; j++) {
      sumColumnOne += matrix[i][j];
      sumColumnTwo += matrix[i + 1][j];
    }

    if (sumRowOne !== sumRowTwo || sumColumnOne !== sumColumnTwo) {
      console.log('false');
      return;
    }
  }

  console.log('true');
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0]
]);