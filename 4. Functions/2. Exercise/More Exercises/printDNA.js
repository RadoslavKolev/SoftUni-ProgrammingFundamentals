function printDNA(number) {
  const dna = 'ATCGTTAGGG'.split('');

  for (let i = 1; i <= number; i++) {
    let [a, b] = dna.splice(0, 2);

    if (i === 1 || i % 4 === 1) {
      console.log(`**${a}${b}**`);
    } else if (i === 2 || i % 4 === 2) {
      console.log(`*${a}--${b}*`);
    } else if (i === 3 || i % 4 === 3) {
      console.log(`${a}----${b}`);
    } else if (i === 4 || i % 4 === 0) {
      console.log(`*${a}--${b}*`);
    }

    dna.push(a);
    dna.push(b);
  }
}

// printDNA(4);
printDNA(10);