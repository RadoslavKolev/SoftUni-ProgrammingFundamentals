function taxCalculator(input) {
  let vehicles = input[0].split('>>');
  let initialTax = 0;
  let totalTaxes = 0;
  let taxDecline = 0;
  let taxIncrease = 0;
  let countIncrease = 0;

  for (let i = 0; i < vehicles.length; i++) {
    let currentVehicle = vehicles[i].split(' ');
    let carType = currentVehicle[0];
    let years = Number(currentVehicle[1]);
    let kilometers = Number(currentVehicle[2]);
    let currentTotal = 0;

    switch (carType) {
      case 'family':
        initialTax = 50;
        taxDecline = years * 5;
        countIncrease = Math.floor(kilometers / 3000);
        taxIncrease = countIncrease * 12;
        break;
      case 'heavyDuty':
        initialTax = 80;
        taxDecline = years * 8;
        countIncrease = Math.floor(kilometers / 9000);
        taxIncrease = countIncrease * 14;
        break;
      case 'sports':
        initialTax = 100;
        taxDecline = years * 9;
        countIncrease = Math.floor(kilometers / 2000);
        taxIncrease = countIncrease * 18;
        break;
      default:
        console.log('Invalid car type.');
        continue;
    }
    currentTotal += initialTax - taxDecline + taxIncrease;
    totalTaxes += currentTotal;
    console.log(`A ${carType} car will pay ${currentTotal.toFixed(2)} euros in taxes.`);
  }
  console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
// taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);