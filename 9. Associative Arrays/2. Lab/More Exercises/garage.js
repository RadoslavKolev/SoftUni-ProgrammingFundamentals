function garage(input) {
  const garages = {};

  input.forEach(elem => {
    let [garageNumber, carInfo] = elem.split(' - ');

    if (!garages.hasOwnProperty(garageNumber)) {
      garages[garageNumber] = [];
    }

    const carInfoObj = {};

    carInfo.split(', ')
      .forEach(info => {
        let [key, value] = info.split(': ');
        carInfoObj[key] = value;
      });

    garages[garageNumber].push(carInfoObj);
  });

  Object.entries(garages)
    .forEach(([garageNumber, carInfoArr]) => {
      console.log(`Garage № ${garageNumber}`);

      carInfoArr.forEach(carInfoObj => {
        const output = [];

        Object.entries(carInfoObj)
          .forEach(([key, value]) => {
            let buff = `${key} - ${value}`;
            output.push(buff);
          });

        console.log(`--- ${output.join(', ')}`);
      });
    });
}

console.log('---------------------- Test 1  ----------------------');
garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);

/* 
  Garage № 1
  --- color - blue, fuel type - diesel
  --- color - red, manufacture - Audi
  Garage № 2
  --- fuel type - petrol
  Garage № 4
  --- color - dark blue, fuel type - diesel, manufacture - Fiat
*/

console.log('---------------------- Test 2  ----------------------');
garage([
  '1 - color: green, fuel type: petrol',
  '1 - color: dark red, manufacture: WV',
  '2 - fuel type: diesel',
  '3 - color: dark blue, fuel type: petrol'
]);

/* 
  Garage № 1
  --- color - green, fuel type - petrol
  --- color - dark red, manufacture - WV
  Garage № 2
  --- fuel type - diesel
  Garage № 3
  --- color - dark blue, fuel type - petrol
*/