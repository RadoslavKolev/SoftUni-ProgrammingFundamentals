class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
    this.totalCost = 0;
  }

  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity;
    this.totalCost += product.quantity * product.price;
  }

  getProducts() {
    const output = [];

    this.storage.forEach(product => {
      output.push(JSON.stringify(product));
    });

    return output.join('\n');
  }
}

console.log('------------------Test 1------------------');
const productOne = {
  name: 'Cucumber',
  price: 1.50,
  quantity: 15
};

const productTwo = {
  name: 'Tomato',
  price: 0.90,
  quantity: 25
};

const productThree = {
  name: 'Bread',
  price: 1.10,
  quantity: 8
};

const storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

/* 
  {"name":"Cucamber","price":1.5,"quantity":15}
  {"name":"Tomato","price":0.9,"quantity":25}
  {"name":"Bread","price":1.1,"quantity":8}
  2
  53.8
*/

console.log('------------------Test 2------------------');
const productFour = {
  name: 'Tomato', 
  price: 0.90, 
  quantity: 19
};

const productFive = {
  name: 'Potato', 
  price: 1.10, 
  quantity: 10
};

const storage2 = new Storage(30);

storage2.addProduct(productFour);
storage2.addProduct(productFive);
console.log(storage2.totalCost);

// 28.1