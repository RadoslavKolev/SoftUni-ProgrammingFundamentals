function oddOccurrences(input) {
  const items = input.split(' ')
    .map(item => item.toLowerCase());

  const oddItems = new Set();

  items.forEach(item => {
    let counter = 0;

    items.forEach(itemToCheck => {
      if (itemToCheck === item) {
        counter++;
      }
    });

    if (counter % 2 !== 0) {
      oddItems.add(item);
    }
  });

  console.log(Array.from(oddItems).join(' '));
}

console.log('---------------------- Test 1  ----------------------');
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

/* 
  c# php 1 5
*/

console.log('---------------------- Test 2  ----------------------');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

/* 
  soft food
*/