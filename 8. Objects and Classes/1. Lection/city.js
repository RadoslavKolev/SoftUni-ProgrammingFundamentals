function city(obj) {
  // for/in loop variant
  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }

  // for/of loop variant
  // for (const key of Object.keys(obj)) {
  //   console.log(`${key} -> ${obj[key]}`);
  // }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000"
});

city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000" 
});