function meetings(input) {
  const meetings = {};

  input.forEach(elem => {
    const [weekday, name] = elem.split(' ');

    if (meetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meetings[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  });

  for (const [key, value] of Object.entries(meetings)) {
    console.log(`${key} -> ${value}`);
  }
}

// Test 1
console.log('\n----------------------------Test 1----------------------------\n');

meetings([
  'Monday Peter',
  'Wednesday Bill',
  'Monday Tim',
  'Friday Tim'
]);

/* Results:
  Scheduled for Monday
  Scheduled for Wednesday
  Conflict on Monday!
  Scheduled for Friday
  Monday -> Peter
  Wednesday -> Bill
  Friday -> Tim
*/

// Test 2
console.log('\n----------------------------Test 2----------------------------\n');

meetings([
  'Friday Bob',
  'Saturday Ted',
  'Monday Bill',
  'Monday John',
  'Wednesday George'
])

/* Results:
  Scheduled for Friday
  Scheduled for Saturday
  Scheduled for Monday
  Conflict on Monday!
  Scheduled for Wednesday
  Friday -> Bob
  Saturday -> Ted
  Monday -> Bill
  Wednesday -> George
*/