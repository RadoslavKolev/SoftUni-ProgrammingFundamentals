function city(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value}`);
  }
}

console.log('------------------Test 1------------------');
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000"
});

/* 
  name -> Sofia
  area -> 492
  population -> 1238438
  country -> Bulgaria
  postCode -> 1000
*/

console.log('------------------Test 2------------------');
city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000"
});

/* 
  name -> Plovdiv
  area -> 389
  population -> 1162358
  country -> Bulgaria
  postCode -> 4000
*/