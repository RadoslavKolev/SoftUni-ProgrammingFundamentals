function distanceBetweenPoints(x1, y1, x2, y2) {
  /*
    We use pythagorean theorem - a^2 + b^2 = c^2
    a & b are both sides of 90 deg triangle, so
    c = Math.sqrt(a^2 + b^2) is the hypotenuse.
  */

  let a = Math.abs(x1 - x2);
  let b = Math.abs(y1 - y2);

  let distance = Math.sqrt((a * a) + (b * b));
  console.log(distance);
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
