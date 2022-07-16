function lettersChangeNumbers(text) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  // filter removes white spaces in the array (['P34562Z', 'q2576f', '', '', 'H456z'])
  const elements = text.split(' ').filter(x => x.length > 1);   
  let result = 0;

  for (const elem of elements) {
    let elemArr = elem.split('');
    let firstLetter = elemArr.shift();
    let lastLetter = elemArr.pop();
    let number = Number(elemArr.join(''));
    let positionFirst = (ALPHABET.indexOf(firstLetter.toLowerCase())) + 1;
    let positionSecond = (ALPHABET.indexOf(lastLetter.toLowerCase())) + 1;

    if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {
      number /= positionFirst
    } else if (firstLetter.charCodeAt(0) >= 97 && firstLetter.charCodeAt(0) <= 122) {
      number *= positionFirst;
    }

    if (lastLetter.charCodeAt(0) >= 65 && lastLetter.charCodeAt(0) <= 90) {
      number -= positionSecond
    } else if (lastLetter.charCodeAt(0) >= 97 && lastLetter.charCodeAt(0) <= 122) {
      number += positionSecond;
    }

    result += number;
  }

  console.log(result.toFixed(2));
}

console.log('---------------------Test 1---------------------');
lettersChangeNumbers('A12b s17G'); // 330.00

console.log('---------------------Test 2---------------------');
lettersChangeNumbers('P34562Z q2576f   H456z'); // 46015.13

console.log('---------------------Test 3---------------------');
lettersChangeNumbers('a1A'); // 0.00