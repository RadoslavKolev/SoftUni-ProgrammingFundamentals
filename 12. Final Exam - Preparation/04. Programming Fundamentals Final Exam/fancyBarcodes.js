function fancyBarcodes(input) {
  const barcodes = Number(input.shift());
  const pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  const digitPattern = /\d/g;

  for (let i = 0; i < barcodes; i++) {
    const validItem = pattern.exec(input[i]);

    if (!validItem) {
      console.log('Invalid barcode');
      continue;
    } 

    const product = validItem.groups.product;
    const digits = product.match(digitPattern);
    let productGroup = '00';

    if (digits) {
      productGroup = digits.join('');
    }

    console.log(`Product group: ${productGroup}`);
  }
}

console.log('--------------------Test 1--------------------');
fancyBarcodes([
  "3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"
]);

/*
  Product group: 00
  Product group: 0
  Product group: 46
*/

console.log('--------------------Test 2--------------------');
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#"
]);

/*
  Product group: 11
  Product group: 00
  Invalid barcode
  Invalid barcode
  Invalid barcode
  Product group: 00
*/