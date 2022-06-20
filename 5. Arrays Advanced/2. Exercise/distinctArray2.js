function distinctArray(input) {
  const uniqueElements = [];

  for (const el of input) {
    if (!uniqueElements.includes(el)) {
      uniqueElements.push(el);
    }
  }

  console.log(uniqueElements.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);