function santasCookies(input) {
  const SINGLE_COOKIE_GRAMS = 25;
  const CUP = 140;
  const SMALL_SPOON = 10;
  const BIG_SPOON = 20;
  const COOKIES_PER_BOX = 5;
  const batches = Number(input.shift());
  let totalBoxes = 0;

  for (let i = 0; i < batches; i++) {
    const flour = Number(input.shift());
    const sugar = Number(input.shift());
    const cocoa = Number(input.shift());

    const flourCups = Math.floor(flour / CUP);
    const sugarSpoons = Math.floor(sugar / BIG_SPOON);
    const cocoaSpoons = Math.floor(cocoa / SMALL_SPOON);

    if (flourCups <= 0 || sugarSpoons <= 0 || cocoaSpoons <= 0) {
      console.log("Ingredients are not enough for a box of cookies.");
      continue;
    }

    const totalCookiesPerBake = Math.floor(
      (CUP + SMALL_SPOON + BIG_SPOON) *
      Math.min(flourCups, sugarSpoons, cocoaSpoons) / SINGLE_COOKIE_GRAMS
    );

    const currentBoxes = Math.floor(totalCookiesPerBake / COOKIES_PER_BOX);
    totalBoxes += currentBoxes;
    console.log(`Boxes of cookies: ${currentBoxes}`);
  }

  console.log(`Total boxes: ${totalBoxes}`);
}

console.log('------------- Test 1 -------------');
santasCookies([
  2,
  200,
  300,
  500,
  100,
  200,
  50
]);

/* 
  Boxes of cookies: 1
  Ingredients are not enough for a box of cookies.
  Total boxes: 1
*/

console.log('------------- Test 2 -------------');
santasCookies([
  1,
  1400,
  200,
  100
]);

/* 
  Boxes of cookies: 13
  Total boxes: 13
*/