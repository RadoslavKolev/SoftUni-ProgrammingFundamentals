function rageQuit(input) {
  const strings = input[0].match(/[^\d]+/g);
  const numbers = input[0].match(/\d+/g).map(Number);
  const len = strings.length;
  let text = '';

  for (let i = 0; i < len; i++) {
    const currentString = strings[i];
    const timesToRepeat = numbers[i];
    text += currentString.toUpperCase().repeat(timesToRepeat);
  }

  const uniqueSymbols = new Set(text);

  console.log(`Unique symbols used: ${uniqueSymbols.size}`);
  console.log(text);
}

console.log('----------------------Test 1----------------------');
rageQuit(['a3']);

/* 
  Unique symbols used: 1
  AAA
*/

console.log('----------------------Test 2----------------------');
rageQuit(['aSd2&5s@1']);

/* 
  Unique symbols used: 5
  ASDASD&&&&&S@
*/

console.log('----------------------Test 3----------------------');
rageQuit([
  'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
]);

/* 
  Unique symbols used: 53
  E-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIE-!BTIZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJZ=E:DMJUTVG VQ>TVG VQ>TVG VQ>TVG VQ>TVG VQ>TVG VQ>TVG VQ>TVG VQ>TVG VQ>TVG VQ>TVG VQ>YHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=DYHYU~O%/%B.}A[=D^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W^/PG.FT{W`AD<L&$W&)*YFWLVWLVWLVWLVWLVWLVWLVWLVWLV($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~($!$`E/{D'XI]-~ *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD *%P"%|N>ZQ@ %XBD<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<V<Y(FHH`@GU#Z#P"Z<VFI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.FI]':\IZ.*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-*W:\MWV`Z-G@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE{_$~}+X%*NYTKWG@HUYE...
*/