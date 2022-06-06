function maxSequenceOfEqualElements(arr) {
  const sequenceArray = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let tempArray = [];
    for (let j = i; j < len; j++) {
      if (arr[j] === arr[i]) {
        tempArray.push(arr[j]);
      } else {
        break;
      }
    }
    if (tempArray.length > sequenceArray.length) {
      for (let i = 0; i < tempArray.length; i++) {
        sequenceArray[i] = tempArray[i];
      }
    }
  }

  console.log(sequenceArray.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);