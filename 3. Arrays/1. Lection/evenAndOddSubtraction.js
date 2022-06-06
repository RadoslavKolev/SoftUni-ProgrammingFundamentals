function evenAndOddSubtraction(input) {
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
  }

  let oddSum = 0;
  let evenSum = 0;
  let difference = 0;

  for (const num of input) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  difference = evenSum - oddSum;
  console.log(difference);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);