class Laptop {
  constructor(info, quality) {
    this.info = info;   // object
    this.quality = quality;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    this.quality -= 1;
  }

  turnOff() {
    this.isOn = false;
    this.quality -= 1;
  }

  showInfo() {
    return JSON.stringify(this.info);
  }

  get price() {
    return (800 - (this.info.age * 2) + (this.quality * 0.5));
  }
}

// Test 1

let info1 = {
  producer: "Dell",
  age: 2,
  brand: "XPS"
};
let laptop1 = new Laptop(info1, 10);
laptop1.turnOn();
console.log(laptop1.showInfo());
laptop1.turnOff();
console.log(laptop1.quality);
laptop1.turnOn();
console.log(laptop1.isOn);
console.log(laptop1.price);

/* Results: 
  {"producer":"Dell","age":2,"brand":"XPS"}
  8
  true
  799.5 
*/


// Test 2

let info2 = {
  producer: "Lenovo",
  age: 1,
  brand: "Legion"
};
let laptop2 = new Laptop(info2, 10);
laptop2.turnOn();
console.log(laptop2.showInfo());
laptop2.turnOff();
laptop2.turnOn();
laptop2.turnOff();
console.log(laptop2.isOn);

/* Results: 
  {"producer":"Lenovo","age":1,"brand":"Legion"}
  false 
*/