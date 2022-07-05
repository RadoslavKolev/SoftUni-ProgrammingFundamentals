function flightSchedule(input) {
  const flights = input.shift(); // Array for all the flights on a specific sector
  const newStatuses = input.shift(); // Array with the newly changed statuses
  const statusToCheck = input.shift().toString(); // Single string

  const allFlights = []; // This array will hold object elements

  // Pushing all the initial flights to the array - objects
  for (const elem of flights) {
    let token = elem.split(' ');
    let plane = token.shift(); 
    let destination = token.join(' ');  // Some cities have 2 names
    
    let flight = {
      plane,
      destination,
    };
    allFlights.push(flight);
  }

  // Changing the statuses of the existing flights
  for (const elem of newStatuses) {
    let [plane, status] = elem.split(' ');
    allFlights.forEach(flight => {
      if (flight.plane === plane) {
        flight.status = status;
      }
    });
  }

  // Prints all the flights, that its statuses were not changed
  if (statusToCheck === 'Ready to fly') {
    allFlights.forEach(flight => {
      if (!flight.status) {
        flight.status = 'Ready to fly';
        console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
      }
    });
  } else {
    // Prints all the flights, that its statuses were changed
    allFlights.forEach(flight => {
      if (flight.status) {
        console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
      }
    });
  }
}

// Test 1 
console.log('\n----------------Test 1----------------\n');

flightSchedule([
  ['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'
  ],
  ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'
  ],
  ['Cancelled']
]);

/* Results:
  { Destination: 'Alabama', Status: 'Cancelled' }
  { Destination: 'California', Status: 'Cancelled' }
  { Destination: 'Texas', Status: 'Cancelled' }
*/


// Test 2
console.log('\n----------------Test 2----------------\n');

flightSchedule([
  ['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'
  ],
  ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'
  ],
  ['Ready to fly']
]);

/* Results:
  { Destination: 'Delaware', Status: 'Ready to fly' }
  { Destination: 'Oregon', Status: 'Ready to fly' }
  { Destination: 'Las Vegas', Status: 'Ready to fly' }
  { Destination: 'Ohio', Status: 'Ready to fly' }
  { Destination: 'New York', Status: 'Ready to fly' }
  { Destination: 'Illinois', Status: 'Ready to fly' }
  { Destination: 'Pennsylvania', Status: 'Ready to fly' }
*/