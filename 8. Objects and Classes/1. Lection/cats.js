function cats(catsArr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const elem of catsArr) {
    const currentCat = elem.split(' ');
    let catName = currentCat[0];
    let catAge = Number(currentCat[1]);
    let catObj = new Cat(catName, catAge);
    catObj.meow();
  }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);