function emojiDetector(input) {
  const text = input[0];
  const pattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
  const digitPattern = /\d/g;

  const coolThreshold = text.match(digitPattern)
    .map(Number)
    .reduce((a, b) => a * b);

  const foundEmojis = text.match(pattern).length;

  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${foundEmojis} emojis found in the text. The cool ones are:`);

  let validEmoji;

  while ((validEmoji = pattern.exec(text)) !== null) {
    const emoji = validEmoji.groups.emoji;
    let currentSum = 0;
    
    for (const letter of emoji) {
      currentSum += letter.charCodeAt();
    }

    if (currentSum >= coolThreshold) {
      console.log(validEmoji[0]);
    }
  }
}

console.log('-------------------- Test 1 --------------------');
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);

/* 
  Cool threshold: 540
  4 emojis found in the text. 
  The cool ones are:
  ::Smiley::
  **Tigers**
  ::Mooning::
*/

console.log('-------------------- Test 2 --------------------');
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"
]);

/* 
  Cool threshold: 120
  4 emojis found in the text. 
  The cool ones are:
  ::Joy::
  **Banana**
  ::Wink::
  **Vali**
*/

console.log('-------------------- Test 3 --------------------');
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]);

/* 
  Cool threshold: 17496
  1 emojis found in the text. 
  The cool ones are:
*/