class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = parts; // object
    this.parts.quality = parts.engine * parts.power;
    this.fuel = fuel;
  }

  drive(fuelLoss) {
    this.fuel -= fuelLoss
  }
}

const parts = {
  engine: 6,
  power: 100
};

console.log('------------------Test 1------------------');
const vehicle = new Vehicle('a', 'b', parts, 200);

vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

/* 
  100
  600
*/

console.log('------------------Test 2------------------');
const parts2 = {
  engine: 9,
  power: 500
};

const vehicle2 = new Vehicle('l', 'k', parts2, 840);

vehicle2.drive(20);
console.log(vehicle2.fuel);

// 820