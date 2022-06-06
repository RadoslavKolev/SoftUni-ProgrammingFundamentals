function mergeArrays(arr1, arr2) {
  const resultArray = [];

  let len = arr1.length;
  for (let i = 0; i < len; i++) {
    let result;
    if (i % 2 === 0) {
      result = Number(arr1[i]) + Number(arr2[i]);
      resultArray.push(result);
    } else {
      result = arr1[i] + arr2[i];
      resultArray.push(result);
    }
  }

  console.log(resultArray.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);
