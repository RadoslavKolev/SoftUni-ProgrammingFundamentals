function encryptingPassword(input) {
  const numberOfInputs = Number(input.shift());
  const pattern = /(.+)>(?<numbers>\d{3})\|(?<lowers>[a-z]{3})\|(?<uppers>[A-Z]{3})\|(?<allSymbols>[^<>]{3})<\1/;

  for (const elem of input) {
    const validPassword = pattern.exec(elem);

    if (!validPassword) {
      console.log('Try another password!');
      continue;
    }

    const {numbers, lowers, uppers, allSymbols} = validPassword.groups;
    const encryptedPassword = numbers + lowers + uppers + allSymbols;

    console.log(`Password: ${encryptedPassword}`);
  }
}

console.log('----------------- Test 1 -----------------');
encryptingPassword([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$"
]);

/*
  Try another password!
  Password: 123yesYES!!!
  Try another password!
*/

console.log('----------------- Test 2 -----------------');
encryptingPassword([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*"
]);

/*
  Password: 111mquBAUmqu
  Try another password!
  Password: 088abcAAA***
  Try another password!
  Try another password!
*/