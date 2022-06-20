function searchForANumber(collection, numbersToCheck) {
  let elementsToTake = numbersToCheck[0];
  let elementsToRemove = numbersToCheck[1];
  let searchNumber = numbersToCheck[2];

  let newArr = collection.slice(0, elementsToTake);

  for (let i = 0; i < elementsToRemove; i++) {
    newArr.shift();
  }

  let countOccurrences = 0;

  for (const num of newArr) {
    if (num === searchNumber) {
      countOccurrences++;
    }
  }

  console.log(`Number ${searchNumber} occurs ${countOccurrences} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);