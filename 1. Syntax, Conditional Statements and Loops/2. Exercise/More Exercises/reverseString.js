function reverseString(str) {
  const strArray = str.split('');   // ['H', 'e', 'l', 'l', 'o']
  strArray.reverse();   // ['o', 'l', 'l', 'e', 'H']
  let reversedString = strArray.join(''); // 'olleH'
  console.log(reversedString);

  // console.log(str.split("").reverse().join(""));
}

reverseString('Hello');