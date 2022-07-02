function towns(input) {
  const townObj = {};

  for (const cityInfo of input) {
    let [name, latitude, longitude] = cityInfo.split(' | ');
    townObj.town = name;
    townObj.latitude = Number(latitude).toFixed(2);
    townObj.longitude = Number(longitude).toFixed(2);
    console.log(townObj);
  }
}

towns([
  'Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625'
]);

towns([
  'Plovdiv | 136.45 | 812.575'
]);