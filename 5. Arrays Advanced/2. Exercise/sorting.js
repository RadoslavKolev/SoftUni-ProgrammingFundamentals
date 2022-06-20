function sorting(numbers) {
  let result = [];
  let sortedArrAsc = numbers.sort((a, b) => a - b);

  while(sortedArrAsc.length !== 0){
    result.push(sortedArrAsc[sortedArrAsc.length - 1]);
    sortedArrAsc.pop();

    result.push(sortedArrAsc[0]);
    sortedArrAsc.shift();
  }

  console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);