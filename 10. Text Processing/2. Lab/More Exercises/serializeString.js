function serializeString(input) {
  let text = input[0];
  const len = text.length;
  const passedChars = [];

  for (const letter of text) {
    const indexes = [];

    if (passedChars.includes(letter)) {
      continue;
    }
    
    passedChars.push(letter);

    for (let i = 0; i < len; i++) {
      if (text[i] === letter) {
        indexes.push(i);
      }
    }

    console.log(`${letter}:${indexes.join('/')}`);
  }
}

console.log('---------------------Test 1---------------------');
serializeString(["abababa"]);

/* 
  a:0/2/4/6
  b:1/3/5
*/

console.log('---------------------Test 2---------------------');
serializeString(["avjavamsdmcalsdm"]);

/* 
  a:0/3/5/11
  v:1/4
  j:2
  m:6/9/15
  s:7/13
  d:8/14
  c:10
  l:12
*/