function deserializeString(input) {
  const output = [];

  for (const elem of input) {
    if (elem === 'end') {
      break;
    }

    let [letter, positions] = elem.split(':');
    const indexes = positions.split('/').map(Number);

    for (const index of indexes) {
      output[index] = letter;
    }
  }

  console.log(output.join(''));
}

console.log('---------------------Test 1---------------------');
deserializeString([
  'a:0/2/4/6',
  'b:1/3/5',
  'end'
]);

/* 
  abababa
*/

console.log('---------------------Test 2---------------------');
deserializeString([
  'a:0/3/5/11',
  'v:1/4',
  'j:2',
  'm:6/9/15',
  's:7/13',
  'd:8/14',
  'c:10',
  'l:12',
  'end'
]);

/* 
  avjavamsdmcalsdm
*/