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
    let [name, age] = elem.split(' ');
    const cat = new Cat(name, age);
    cat.meow();
  }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);