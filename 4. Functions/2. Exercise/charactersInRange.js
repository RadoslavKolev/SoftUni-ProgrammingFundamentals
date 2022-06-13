function charactersInRange(firstChar, secondChar) {
  let first = firstChar.charCodeAt(0);
  let second = secondChar.charCodeAt(0);
  let start = Math.min(first, second);
  let end = Math.max(first, second);
  let buff = '';

  for (let i = start + 1; i < end; i++) {
    buff += String.fromCharCode(i) + ' ';
  }

  return buff;
}

console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));

