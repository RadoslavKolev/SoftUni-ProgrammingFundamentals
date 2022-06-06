function rotateArray(arr) {
  let rotations = arr.pop();

  while (rotations > 0) {
    let currentElement = arr.pop();
    arr.unshift(currentElement);
    rotations--;
  }
  console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15']);
