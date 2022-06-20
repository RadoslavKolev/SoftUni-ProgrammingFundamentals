function distinctArray(input) {
  const uniqueElements = new Set();

  for (const el of input) {
    uniqueElements.add(el);
  }

  let text = '';
  for (const el of uniqueElements) {
    text += el + ' ';
  }

  console.log(text);
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);