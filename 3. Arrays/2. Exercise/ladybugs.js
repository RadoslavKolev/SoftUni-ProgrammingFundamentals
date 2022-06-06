function ladybugs(arr) {
  let sizeOfField = arr[0];
  let initialIndexes = arr[1];
  initialIndexes = initialIndexes.split(" ");
  let commands = arr.slice(2);
  let field = [];
 
  for (let i = 0; i < sizeOfField; i++) {
    field.push(0);
  }
 
  for (let i = 0; i < initialIndexes.length; i++) {
    let position = Number(initialIndexes[i]);
    if (position > field.length - 1) {
      continue;
    }
    field[position] = 1;
  }
 
 
  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i];
    currentCommand = currentCommand.split(" ");
 
    let position = Number(currentCommand[0]);
    let direction = currentCommand[1];
    let flyCount = Number(currentCommand[2]);
 
    if (field[position] === 0
      || position < 0
      || position > field.length - 1) {
      continue;
    }
 
    field[position] = 0;
   
    if (flyCount < 0) {
      direction = direction === "right" ? "left" : "right";
      flyCount = Math.abs(flyCount);
    }
   
    let nextPosition = 0;
 
    if (direction === "right") {
      nextPosition = position + flyCount;
    } else if (direction === "left") {
      nextPosition = position - flyCount;
    }
 
    while (field[nextPosition] === 1) {      
      if (direction === "right") {
        nextPosition += flyCount;
      } else if (direction === "left") {
        nextPosition -= flyCount;
      }
    }
   
    if (nextPosition > field.length - 1 || nextPosition < 0) {
      continue;
    }
 
    field[nextPosition] = 1;
  }
 
  console.log(field.join(" "));
}