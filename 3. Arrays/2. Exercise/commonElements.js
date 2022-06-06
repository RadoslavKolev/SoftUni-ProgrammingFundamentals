function commonElements(arr1, arr2) {
  for (const elem of arr1) {
    if (arr2.includes(elem)) {
      console.log(elem);
    }
  }
}

// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
//                ['Petar', 10, 'hey', 4, 'hello', '2']);

commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
