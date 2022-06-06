function triplesOfLatinLetters(n) {
  let num = Number(n);

  for (let a = 0; a < num; a++) {
    let triple = "";
    let letter1 = String.fromCharCode(97 + a);
    for (let b = 0; b < num; b++) {
      let letter2 = String.fromCharCode(97 + b);
      for (let c = 0; c < num; c++) {
        let letter3 = String.fromCharCode(97 + c);
        triple = letter1 + letter2 + letter3;
        console.log(triple);
        triple = "";
      }
    }
  }
}

triplesOfLatinLetters("3");
triplesOfLatinLetters(2);
