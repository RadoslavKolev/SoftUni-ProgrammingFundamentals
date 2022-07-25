function piccolo(input) {
  const parkingLot = new Set();

  input.forEach(elem => {
    const [command, carNumber] = elem.split(', ');

    switch (command) {
      case 'IN':
        parkingLot.add(carNumber);
        break;
      case 'OUT':
        parkingLot.delete(carNumber);
        break;
      default:
        console.log('No such command!');
        break;
    }
  });

  if (parkingLot.size === 0) {
    console.log('Parking Lot is Empty');
  } else {
    const sortedParking = Array.from(parkingLot)
      .sort((a, b) => a.localeCompare(b));

    console.log(sortedParking.join('\n'));
  }
}

console.log('---------------------- Test 1  ----------------------');
piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU'
]);

/* 
  CA2822UU
  CA2844AA
  CA9876HH
  CA9999TT
*/

console.log('---------------------- Test 2  ----------------------');
piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'OUT, CA1234TA'
]);

/* 
  Parking Lot is Empty
*/