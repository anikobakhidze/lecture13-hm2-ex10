let arr = [3, 5, 12, 45, 10, -10, -101, 2, -200, 47, 89];
let n1;
let n2;
while (arr[0] !== arr[arr.length - 1]) {
  n1 = Number(arr[0]);
  n2 = Number(arr[arr.length - 1]);
  console.log(n1 + n2);
  arr.pop();
  arr.shift();
}
