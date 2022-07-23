function adAstra(input) {
  const CALORIES_PER_DAY = 2000;
  const text = input.shift();
  const pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  const foodInfo = [];
  let totalCalories = 0;

  while ((validFoodInfo = pattern.exec(text)) !== null) {
    const itemName = validFoodInfo.groups.item;
    const expirationDate = validFoodInfo.groups.expirationDate;
    const calories = Number(validFoodInfo.groups.calories);

    foodInfo.push({
      itemName,
      expirationDate,
      calories,
    });

    totalCalories += calories;
  }

  const daysToLast = Math.floor(totalCalories / CALORIES_PER_DAY);
  console.log(`You have food to last you for: ${daysToLast} days!`);

  if (foodInfo.length === 0) return;

  foodInfo.forEach(obj => {
    console.log(`Item: ${obj.itemName}, Best before: ${obj.expirationDate}, Nutrition: ${obj.calories}`);
  });
}

console.log('-----------------------------Test 1-----------------------------');
adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

/* 
  You have food to last you for: 2 days!
  Item: Bread, Best before: 19/03/21, 
  Nutrition: 4000
  Item: Apples, Best before: 08/10/20, 
  Nutrition: 200
  Item: Carrots, Best before: 06/08/20, 
  Nutrition: 500
*/

console.log('-----------------------------Test 2-----------------------------');
adAstra([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);

/* 
  You have food to last you for: 9 days!
  Item: Fish, Best before: 24/12/20, Nutrition: 
  8500
  Item: Ice Cream, Best before: 03/10/21, 
  Nutrition: 9000
  Item: Milk, Best before: 05/09/20, Nutrition: 
  2000
*/

console.log('-----------------------------Test 3-----------------------------');
adAstra([
  'Hello|#Invalid food#19/03/20#450|$5*(@'
]);

// You have food to last you for: 0 days! 