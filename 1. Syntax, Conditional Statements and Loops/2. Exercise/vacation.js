function vacation(people, groupType, day) {
  let price = 0;
  let total = 0;

  switch(day) {
    case 'Friday':
      if (groupType === 'Students') {
        price = 8.45;
      } else if (groupType === 'Business') {
        price = 10.90;
      } else if (groupType === 'Regular') {
        price = 15;
      }
      break;
    case 'Saturday':
      if (groupType === 'Students') {
        price = 9.80;
      } else if (groupType === 'Business') {
        price = 15.60;
      } else if (groupType === 'Regular') {
        price = 20;
      }
      break;
    case 'Sunday':
      if (groupType === 'Students') {
        price = 10.46;
      } else if (groupType === 'Business') {
        price = 16;
      } else if (groupType === 'Regular') {
        price = 22.50;
      }
      break;
    default:
      console.log(`Only Friday, Saturday and Sunday`);
      return;
  }

  total = people * price;

  if (groupType === 'Students' && people >= 30) {
    total = total - (total * 15 / 100);
  } else if (groupType === 'Business' && people >= 100) {
    let freeStay = 10 * price;
    total -= freeStay;
  } else if (groupType === 'Regular' && people >= 10 && people <= 20) {
    total = total - (total * 5 / 100);
  }

  console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");