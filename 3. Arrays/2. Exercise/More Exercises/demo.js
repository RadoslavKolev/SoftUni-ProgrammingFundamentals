function solve(arr) {
  console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
  const a = [1, 2, 3, 4];
  const b = [...a];
  console.log(b);
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([2]);
solve([20, 3, 2, 15, 6, 1]);
