function buildWall(input) {
  const MAX_FEET = 30;
  const CUBIC_YARDS_CONCRETE = 195;
  const CONCRETE_PRICE = 1900;

  let numbers = input.map(Number);
  let totalConcrete = 0;
  let costs = 0;

  // Checks if there are any ready crews (equal to 30)
  let crews = numbers.filter(len => len < MAX_FEET).length;

  const dailyConcrete = [];

  while (crews !== 0) {
    let concreteByAllCrews = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== MAX_FEET) {
        numbers[i]++;
        concreteByAllCrews += CUBIC_YARDS_CONCRETE;
        if (numbers[i] === MAX_FEET) {
          crews--;
        }
      }
    }

    totalConcrete += concreteByAllCrews;
    dailyConcrete.push(concreteByAllCrews);
  }

  costs = totalConcrete * CONCRETE_PRICE;
  console.log(dailyConcrete.join(", "));
  console.log(`${costs} pesos`);
}

buildWall([21, 25, 28]);
// buildWall([17]);
// buildWall([17, 22, 17, 19, 17]);