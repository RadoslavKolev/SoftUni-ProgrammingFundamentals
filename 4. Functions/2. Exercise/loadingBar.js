function loadingBar(number) {
  let text = number + '% ';

  if (number === 100) {
    text += 'Complete!\n';
  }

  text += '[';
  let percentToFill = number / 10;

  for (let i = 0; i < 10; i++) {
    if (i < percentToFill) {
      text += '%';
    } else {
      text += '.';
    }
  }

  text += ']';

  if (number !== 100) {
    text += '\nStill loading...';
  }

  console.log(text);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);