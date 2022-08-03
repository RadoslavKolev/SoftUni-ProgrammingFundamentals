function destinationMapper(str) {
  const pattern = /([=/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
  const destinations = [];
  let sum = 0;
  let validLocation;

  while ((validLocation = pattern.exec(str)) !== null) {
    const location = validLocation.groups.name;
    destinations.push(location);
    sum += location.length;
  }
  
  console.log('Destinations:', destinations.join(', '));
  console.log('Travel Points:', sum);
}

console.log('----------Test 1----------');
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');

/* 
  Destinations: Hawai, Cyprus
  Travel Points: 11
*/

console.log('----------Test 2----------');
destinationMapper('ThisIs some InvalidInput');

/*
  Destinations:
  Travel Points: 0
*/