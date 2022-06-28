function phoneShop(input) {
  const phones = input.shift().split(', ');

  const add = (arr, phone) => arr.push(phone);

  const remove = (arr, phone) => {
    let index = arr.indexOf(phone);
    arr.splice(index, 1);
  };

  const bonusPhone = (arr, oldPhone, newPhone) => {
    let index = arr.indexOf(oldPhone);
    arr.splice(index + 1, 0, newPhone);
  };

  const last = (arr, phone) => {
    let index = arr.indexOf(phone);
    let item = arr.splice(index, 1).join();
    arr.push(item);
  }

  let i = 0;
  while (input[i] !== 'End') {
    let currentAction = input[i].split(' - ');
    let command = currentAction[0];
    let phone = '';

    if (command !== 'Bonus phone') {
      phone = currentAction[1];
    }

    switch (command) {
      case 'Add':
        if (!phones.includes(phone)) {
          add(phones, phone);
        }
        break;
      case 'Remove':
        if (phones.includes(phone)) {
          remove(phones, phone);
        }
        break;
      case 'Bonus phone':
        let bonus = currentAction[1].split(':');
        phone = bonus[0];
        if (phones.includes(phone)) {
          let newPhone = bonus[1];
          bonusPhone(phones, phone, newPhone);
        }
        break;
      case 'Last':
        if (phones.includes(phone)) {
          last(phones, phone);
        }
        break;
      default:
        console.log('No such command!');
        continue;
    }
    i++;
  }
  console.log(phones.join(', '));
}

phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End"
]);

phoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End"
]);

phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End"
]);