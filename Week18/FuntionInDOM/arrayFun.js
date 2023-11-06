//ES6 js
// () => {};
//1.
//basic arrow function
// const funCall = () => {
//   console.log("Hello,I am arrow function");
// };

// console.log(funCall());

//2.
//basic arrow function with parameter

// const add = (a, b) => a + b;

// console.log(add(5, 3));

//3.
const square = (num) => num * num;
console.log(square(4));

//4.with array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = numbers.map((num) => num * num);
console.log(squares);

//filter elements
const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers); //
