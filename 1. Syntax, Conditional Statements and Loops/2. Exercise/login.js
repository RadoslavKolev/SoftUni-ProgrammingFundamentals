function login(input) {
  let username = input[0];
  let password = username.split('').reverse().join('');
  
  let i = 1;
  while (true) {
    let currentWord = input[i];
    
    if (currentWord === password) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      if (currentWord === input[input.length - 1]) {
        console.log(`User ${username} blocked!`);
        break;
      } else {
        console.log(`Incorrect password. Try again.`);
      }
    }
    i++;
  }
}

login(['Acer','login','go','let me in','recA']);
// login(['momo','omom'] );
// login(['sunny','rainy','cloudy','sunny','not sunny']);