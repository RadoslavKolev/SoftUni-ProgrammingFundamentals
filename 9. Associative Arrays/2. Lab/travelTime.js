function travelTime(input) {
  const countries = new Map();

  input.forEach(elem => {
    let [country, town, price] = elem.split(' > ');
    price = Number(price);
    let towns;

    if (!countries.has(country)) {
      towns = new Map();
    } else {
      towns = countries.get(country);
    }

    if (!towns.has(town)) {
      towns.set(town, price);
    } else {
      const currentPrice = towns.get(town);
      if (price < currentPrice) {
        towns.set(town, price);
      }
    }

    countries.set(country, towns);
  });

  const sortedCountries = Array.from(countries)
    .sort((a, b) => a[0].localeCompare(b[0]));

  for (const [country, cities] of sortedCountries) {
    const sortedCities = Array.from(cities)
      .sort((a, b) => a[1] - b[1])
      .map(city => city.join(' -> '));

    console.log(`${country} -> ${sortedCities.join(' ')}`);
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