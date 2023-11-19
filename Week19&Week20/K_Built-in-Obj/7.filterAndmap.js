//map
//()-> arg function expression
//work on array items
//return new array element
let nums = [1, 2, 3, 4, 5];
// let result = nums.map(function (n) {
//   //[2,3,4,5,6]
//   return n + 1;
// });
// console.log(result);
let result = nums.map((n) => n + 1);
console.log(result);

//filter
//() -> arg function expression
//work on array items
//true --> item return

let result2 = nums.filter(function (n) {
  return !(n % 2);
});
console.log(result2);
