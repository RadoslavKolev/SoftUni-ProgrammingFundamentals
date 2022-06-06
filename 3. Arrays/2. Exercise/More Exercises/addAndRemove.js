function addAndRemove(arr) {
  let number = 1;
  const numArray = [];

  for (const elem of arr) {
    if (elem === "add") {
      numArray.push(number);
    } else {
      numArray.pop();
    }
    number++;
  }
  if (numArray.length === 0) {
    console.log('Empty');
  } else {
    console.log(numArray.join(" "));
  }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
