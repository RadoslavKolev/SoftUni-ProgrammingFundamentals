function reverseInPlace(words) {
  let buff = '';

  for (let i = words.length - 1; i >= 0; i--) {
    buff += `${words[i]} `;
  }

  console.log(buff);
}

reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
