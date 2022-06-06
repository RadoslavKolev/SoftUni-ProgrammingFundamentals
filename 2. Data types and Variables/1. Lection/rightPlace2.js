function rightPlace(word1, char, word2) {
  let replacedWord = '';

  for (const letter of word1) {
    if (letter !== '_') {
      replacedWord += letter;
    } else {
      replacedWord += char;
    }
  }

  if (replacedWord === word2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");