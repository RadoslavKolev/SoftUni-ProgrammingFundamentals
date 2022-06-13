function nxnMatrix(n) {
  let matrix = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix += n + ' ';
    }
    matrix += '\n';
  }

  console.log(matrix);
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);