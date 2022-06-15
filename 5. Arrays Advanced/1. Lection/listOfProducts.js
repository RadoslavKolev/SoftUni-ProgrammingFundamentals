function listOfProducts(arr) {
  const sortedArr = arr.sort();
  const mappedArr = sortedArr.map((el, i) => `${i + 1}.${el}`);
  console.log(mappedArr.join("\n"));
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);