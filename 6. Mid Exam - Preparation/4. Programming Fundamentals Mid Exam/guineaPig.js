function guineaPig(input) {
  const MONTH = 30;
  const FOOD_TO_GIVE = 300;
  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  let weight = Number(input[3]) * 1000;
  const COVER_TO_PUT = weight * 1 / 3;
  let flag = true;

  for (let day = 1; day <= MONTH; day++) {
    food -= FOOD_TO_GIVE;

    if (day % 2 === 0) {
      hay -= food * 5 / 100;
    }

    if (day % 3 === 0) {
      cover -= COVER_TO_PUT;
    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      flag = false;
      break;
    }
  }

  food /= 1000;
  hay /= 1000;
  cover /= 1000;

  if (flag) {
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
  }
}

guineaPig([
  "10",
  "5",
  "5.2",
  "1"
]);
guineaPig([
  "1",
  "1.5",
  "3",
  "1.5"
]);
guineaPig([
  "9",
  "5",
  "5.2",
  "1"
]);