function worldTour(input) {
  let destinations = input.shift();

  const addStop = (str, index, text) => str.slice(0, index) + text + str.slice(index);

  const removeStop = (str, start, end) => str.slice(0, start) + str.slice(end + 1);

  const swap = (str, oldStr, newStr) => {
    const regex = new RegExp(oldStr, 'g');
    return str.replace(regex, newStr);
  };

  for (const elem of input) {
    if (elem === 'Travel') break;

    const [command, ...rest] = elem.split(':');

    switch (command) {
      case 'Add Stop':
        const index = Number(rest[0]);
        const string = rest[1];

        if (index < 0 || index >= destinations.length) continue;

        destinations = addStop(destinations, index, string);
        break;
      case 'Remove Stop':
        const startIndex = Number(rest[0]);
        const endIndex = Number(rest[1]);

        if (startIndex < 0 || startIndex >= destinations.length || endIndex < 0 || endIndex < destinations.length) continue;

        destinations = removeStop(destinations, startIndex, endIndex);
        break;
      case 'Switch':
        const oldString = rest[0];
        const newString = rest[1];
        destinations = swap(destinations, oldString, newString);
        break;
      default:
        console.log('No such command!');
        continue;
    }

    console.log(destinations);
  }

  console.log('Ready for world tour! Planned stops:', destinations);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"
]);

/* 
  Hawai::RomeCyprys-Greece
  Hawai::Rome-Greece
  Bulgaria::Rome-Greece
  Ready for world tour! Planned stops: Bulgaria::Rome-Greece
*/