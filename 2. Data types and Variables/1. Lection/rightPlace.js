function rightPlace(word1, char, word2) {
  let replacedWord = word1.replace("_", char);

  if (replacedWord === word2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
