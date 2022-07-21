function matchDates(input) {
  const dates = input[0];
  const pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
  let validDate = pattern.exec(dates);

  while (validDate !== null) {
    let day = validDate.groups['day'];
    let month = validDate.groups['month'];
    let year = validDate.groups['year'];
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    validDate = pattern.exec(dates);
  }
}

console.log('------------------Test 1------------------');
matchDates([
  '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
]);

/* 
  Day: 13, Month: Jul, Year: 1928
  Day: 10, Month: Nov, Year: 1934
  Day: 25, Month: Dec, Year: 1937
*/

console.log('------------------Test 2------------------');
matchDates([
  '1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'
]);

/* 
  Day: 11, Month: Dec, Year: 2010
  Day: 18, Month: Jan, Year: 2014
*/