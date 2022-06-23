function numbers(input) {
  let sequence = input.split(' ').map(Number);

  let sum = sequence.reduce((total, num) => total + num);
  let average = sum / sequence.length;

  let moreThanAverage = sequence.filter(num => num > average)
                                .sort((a, b) => b - a)
                                .slice(0, 5);

  if (moreThanAverage.length === 0) {
    console.log('No');
  } else {
    console.log(moreThanAverage.join(' '));
  }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');