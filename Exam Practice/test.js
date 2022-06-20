function test() {
  let arr = [1, 2, 3, 4, 'abc', true, [5, 6, 7, [8, 'asd', [9, true, 10]]]];

  let result = [];

  let iterate = (arr) => {
    for (let el of arr) {
      if (typeof el === 'number') {
        result.push(el);
      } else if (Array.isArray(el)) {
        iterate(el);
      }
    }
  }

  iterate(arr);
  console.log(result.join(' '));
}

test();