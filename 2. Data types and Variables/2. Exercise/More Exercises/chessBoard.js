function chessBoard(num) {
  let size = Number(num);
  let currentColor = "black";
  let nextColor = "";

  console.log(`<div class="chessboard">`);

  for (let rows = 1; rows <= size; rows++) {
    console.log(`  <div>`);

    for (let columns = 1; columns <= size; columns++) {
      console.log(`    <span class="${currentColor}"></span>`);
      nextColor = currentColor;
      if (nextColor === 'black') {
        currentColor = 'white';
      } else {
        currentColor = 'black';
      }
      // currentColor = nextColor === "black" ? "white" : "black";
    }

    console.log(`  </div>`);
    if (size % 2 === 0) {
      nextColor = currentColor;
      if (nextColor === 'black') {
        currentColor = 'white';
      } else {
        currentColor = 'black';
      }
      // currentColor = nextColor === "black" ? "white" : "black";
    }
  }
  console.log(`</div>`);
}

chessBoard(3);
