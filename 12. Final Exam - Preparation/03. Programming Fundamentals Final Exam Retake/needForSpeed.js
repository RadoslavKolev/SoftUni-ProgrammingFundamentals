function needForSpeed(input) {
  const MAX_MILEAGE = 100000;
  const MAX_TANK_FUEL = 75;
  const MIN_MILEAGE = 10000;
  const numberOfCars = Number(input.shift());
  const cars = {};

  for (let i = 0; i < numberOfCars; i++) {
    let [car, mileage, fuel] = input.shift().split('|');
    mileage = Number(mileage);
    fuel = Number(fuel);

    cars[car] = {
      mileage,
      fuel,
    };
  }

  const drive = (obj, car, distance, fuel) => {
    if (obj[car].fuel < fuel) {
      console.log('Not enough fuel to make that ride');
      return;
    }

    obj[car].mileage += distance;
    obj[car].fuel -= fuel;
    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

    if (obj[car].mileage >= MAX_MILEAGE) {
      delete obj[car];
      console.log(`Time to sell the ${car}!`);
    }
  };

  const refuel = (obj, car, fuel) => {
    if (obj[car].fuel + fuel > MAX_TANK_FUEL) {
      fuel = MAX_TANK_FUEL - obj[car].fuel;
    }

    obj[car].fuel += fuel;
    console.log(`${car} refueled with ${fuel} liters`);
  };

  const revert = (obj, car, kilometers) => {
    obj[car].mileage -= kilometers;

    if (obj[car].mileage < MIN_MILEAGE) {
      obj[car].mileage = MIN_MILEAGE;
      return;
    }
  
    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
  };

  for (const elem of input) {
    if (elem === 'Stop') break;

    const [command, car, ...rest] = elem.split(' : ');

    switch (command) {
      case 'Drive':
        const distance = Number(rest[0]);
        const fuelToRemove = Number(rest[1]);
        drive(cars, car, distance, fuelToRemove);
        break;
      case 'Refuel':
        const fuelToRefill = Number(rest[0]);
        refuel(cars, car, fuelToRefill);
        break;
      case 'Revert':
        const kilometers = Number(rest[0]);
        revert(cars, car, kilometers);
        break;
      default:
        console.log('No such command!');
        continue;
    }
  }

  Object.entries(cars)
    .forEach(([car, obj]) => {
      console.log(`${car} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`);
    }
  );
}

console.log('------------------ Test 1 ------------------');
needForSpeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
]);

/* 
  Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
  Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
  Not enough fuel to make that ride
  Audi A6 refueled with 50 liters
  Mercedes CLS mileage decreased by 500 kilometers
  Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
  Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
  Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
*/

console.log('------------------ Test 2 ------------------');
needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
]);

/* 
  Not enough fuel to make that ride
  Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
  Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
  Time to sell the Aston Martin Valkryie!
  Lamborghini Veneno refueled with 1 liters
  Bugatti Veyron mileage decreased by 2000 kilometers
  Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
  Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
  Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
*/