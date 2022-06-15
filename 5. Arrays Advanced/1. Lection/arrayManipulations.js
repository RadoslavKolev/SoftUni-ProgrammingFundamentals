function arrayManipulations(arrOfStrings) {
  let add = (arr, num) => arr.push(num);
  let remove = (arr, num) => {
    for (const elem of arr) {
      if (elem === num) {
        let index = arr.indexOf(elem);
        arr.splice(index, 1);
      }
    }
  }
  let removeAt = (arr, index) => arr.splice(index, 1);
  let insert = (arr, num, index) => arr.splice(index, 0, num);

  const mainArr = arrOfStrings.shift()
                              .split(' ')
                              .map(Number);
  
  let len = arrOfStrings.length;

  for (let i = 0; i < len; i++) {
    let currentArr = arrOfStrings[i].split(' ');
    let command = currentArr[0];
    let number = Number(currentArr[1]);

    switch (command) {
      case 'Add':
        add(mainArr, number);
        break;
      case 'Remove':
        remove(mainArr, number);
        break;
      case 'RemoveAt':
        removeAt(mainArr, number);
        break;
      case 'Insert':
        let index = Number(currentArr[2]);
        insert(mainArr, number, index);
        break;
      default:
        console.log('No such command');
        break;
    }
  }

  console.log(mainArr.join(" "));
}

arrayManipulations([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3'
]);

arrayManipulations([
'6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);