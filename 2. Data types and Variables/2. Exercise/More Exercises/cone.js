function cone(r, h) {
  let volume = ((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(4);
  let area = (Math.PI * r * (r + Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2)))).toFixed(4);

  console.log(`volume = ${volume}`);
  console.log(`area = ${area}`);
}

cone(3, 5);
