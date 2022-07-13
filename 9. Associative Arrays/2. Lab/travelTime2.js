// Todor's variant with object literal

function travelTime(input) {
  const countries = {};

  input.forEach(elem => {
    let [country, town, price] = elem.split(' > ');
    price = Number(price);

    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
    }

    if (!countries[country].hasOwnProperty(town)) {
      countries[country][town] = 0; // in that way we escape from the else
    }

    let oldPrice = countries[country][town];

    if (price < oldPrice || oldPrice === 0) {
      countries[country][town] = price;
    }
  });

  const sortedCountries = Object.entries(countries)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
  
  for (let [country, townInfoObj] of sortedCountries) {
    const sortedTowns = Object.entries(townInfoObj)
      .sort(([keyA, valueA], [keyB, valueB]) => valueA - valueB);
    
    let buff = `${country} -> `;

    for (let [town, price] of sortedTowns) {
      buff += `${town} -> ${price} `;
    }

    console.log(buff);
  }
}

console.log('---------------------- Test 1  ----------------------');
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200"
]);

/* 
  Albania -> Tirana -> 1000
  Bulgaria -> Sofia -> 200 Sopot -> 800
  France -> Paris -> 2000
*/

console.log('---------------------- Test 2  ----------------------');
travelTime([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10'
]);

/* 
  Albania -> Tirana -> 25000 
  Bulgaria -> Lukovit -> 10 Sofia -> 25000 Varna -> 25010 
  Kalimdor -> Orgrimar -> 25000
*/