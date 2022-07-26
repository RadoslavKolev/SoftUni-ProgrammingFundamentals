function destinationMapper(str) {
  const pattern = /([=/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
  const allMatches = str.matchAll(pattern);
  const destinations = [];
  let sum = 0;

  for (const element of allMatches) {
    destinations.push(element.groups.name);
    sum += element.groups.name.length;
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