function plant(arr) {
  let n = Number(arr.shift());
  let obj = {};
  
  // const pattern = /: - /g;
  for (let i = 0; i < n; i++) {
    let [plant, rarity] = arr[i].split('<->');
    rarity = Number(rarity);
    obj[plant] = {
      rarity,
      ratings: [],
    };
   
  }
  // console.log(obj)
  for (let j = n; j < arr.length; j++) {
    if (arr[j] === 'Exhibition') {
      break;
    }
    if (arr[j].includes('Rate')) {
      let [_, ...command] = arr[j].split(': ');
      let [plant, rating] = command[0].split(' - ');
      if (obj.hasOwnProperty(plant)) {
        obj[plant]['ratings'].push(rating);
      } else {
        console.log('error');
      }

    } else if (arr[j].includes('Update')){
      let [_, ...command] = arr[j].split(': ');
      let [plant, newRarity] = command[0].split(' - ');
      if (obj.hasOwnProperty(plant)){
        obj[plant]['rarity'] = newRarity;
      } else {
        console.log('error');
      }

    } else if (arr[j].includes('Reset')){
      let[_, plant] = arr[j].split(': ');
      if (obj.hasOwnProperty(plant)){
        obj[plant]['ratings'] = [];
      } else {
        console.log('error');
      }
    }

  }
  console.log('Plants for the exhibition:');
  for (let key in obj) {
    let avg = 0;
    if (obj[key]['ratings'].length > 0){
      let sum = obj[key]['ratings'].map(Number).reduce((a, b) => a + b);
       avg = sum / obj[key]['ratings'].length;
    }
    console.log(`- ${key}; Rarity: ${obj[key]['rarity']}; Rating: ${avg.toFixed(2)}`);
  }
}

console.log('------------------Test 1------------------');
plant([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"
]);

console.log('------------------Test 2------------------');
plant([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition"
]);