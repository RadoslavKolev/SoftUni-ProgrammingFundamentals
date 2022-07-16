function modernTimes(text) {
  const regex = /[^a-zA-Z]+/g;

  text.split(' ')
    .filter(word => word.startsWith('#') && word.length > 1)
    .map(word => word.slice(1))
    .filter(word => word.search(regex) === -1)
    .forEach(word => console.log(word));
}

console.log('---------------------Test 1---------------------');
modernTimes(
  'Nowadays everyone uses # to tag a #special word in #socialMedia #social@12Media'
);

/* 
  special
  socialMedia
*/

console.log('---------------------Test 2---------------------');
modernTimes(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);

/* 
  variously
  regions
  number
*/