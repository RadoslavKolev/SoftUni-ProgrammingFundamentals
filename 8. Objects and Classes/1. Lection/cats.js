function cats(cats) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const elem of cats) {
    const [name, age] = elem.split(' ');
    const cat = new Cat(name, age);
    cat.meow();
  }
}

console.log('------------------Test 1------------------');
cats(['Mellow 2', 'Tom 5']);

/*
  Mellow, age 2 says Meow
  Tom, age 5 says Meow
*/

console.log('------------------Test 1------------------');
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);

/*
  Candy, age 1 says Meow
  Poppy, age 3 says Meow
  Nyx, age 2 says Meow
*/