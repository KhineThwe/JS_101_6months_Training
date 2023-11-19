let nums = [1, 2, 3, 4, 5];
let result = nums.reduce(function (a, n) {
  //null+1=1
  return a + n;
}); //accumulator,currentvalue

console.log(result);

let result2 = [2, 3, 4, 5, 6].reduce((a, n) => a * n);
console.log(result2);
