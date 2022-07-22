function worldTour(input) {
  let destinations = input.shift();

  for (let element of input) {

    if (element === 'Travel') {
      break;
    }

    if (element.includes('Add Stop')) {
      const [_, index, str] = element.split(':');

      if (index >= 0 && index < destinations.length) {
        destinations = destinations.slice(0, index) + str + destinations.slice(index)
      }
    } else if (element.includes('Remove Stop')) {
      let [_, startIndex, endIndex] = element.split(':');
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);

      if (startIndex >= 0 && startIndex < destinations.length && endIndex >= 0 && endIndex < destinations.length) {
        const part1 = destinations.slice(0, startIndex);
        const part2 = destinations.slice(endIndex + 1);
        destinations = part1 + part2;
      }
    } else if (element.includes('Switch')) {
      const [_, oldStr, newStr] = element.split(':');
      const regex = new RegExp(oldStr, 'g');
      destinations = destinations.replace(regex, newStr);
    }

    console.log(destinations);
  }

  console.log('Ready for world tour! Planned stops:', destinations);
}

console.log('------------------Test 1------------------');
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"
]);