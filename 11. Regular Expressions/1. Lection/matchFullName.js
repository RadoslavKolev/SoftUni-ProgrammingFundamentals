function matchFullName(names) {
  const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  const validNames = names.match(pattern);
  console.log(validNames.join(' '));
}

console.log('------------------Test 1------------------');
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov');

// Ivan Ivanov Test Testov