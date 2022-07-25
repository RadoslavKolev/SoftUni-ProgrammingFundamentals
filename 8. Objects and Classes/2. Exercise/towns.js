function towns(input) {
  const townObj = {};

  for (const cityInfo of input) {
    const [name, latitude, longitude] = cityInfo.split(' | ');

    townObj.town = name;
    townObj.latitude = Number(latitude).toFixed(2);
    townObj.longitude = Number(longitude).toFixed(2);
    
    console.log(townObj);
  }
}

console.log('------------------Test 1------------------');
towns([
  'Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625'
]);

/* 
  { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
  { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
*/

console.log('------------------Test 1------------------');
towns([
  'Plovdiv | 136.45 | 812.575'
]);

// { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }