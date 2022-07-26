function worldTour(input) {
  let destinations = input.shift();

  const addStop = (str, index, text) => {
    if (index >= 0 && index < str.length) {
      return str.slice(0, index) + text + str.slice(index);
    } 

    return str;
  };

  const removeStop = (str, start, end) => {
    if (start >= 0 && start < str.length && end >= 0 && end < str.length) {
      return str.slice(0, start) + str.slice(end + 1);
    } 

    return str;
  };

  const swap = (str, oldStr, newStr) => {
    const regex = new RegExp(oldStr, 'g');
    return str.replace(regex, newStr);
  };

  for (const elem of input) {
    if (elem === 'Travel') break;

    const [command, value1, value2] = elem.split(':');

    switch (command) {
      case 'Add Stop':
        destinations = addStop(destinations, Number(value1), value2);
        break;
      case 'Remove Stop':
        destinations = removeStop(destinations, Number(value1), Number(value2));
        break;
      case 'Switch':
        destinations = swap(destinations, value1, value2);
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