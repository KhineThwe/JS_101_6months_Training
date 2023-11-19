//Syntax
// ...Object

function myFunction() {
  const obj = { age: 25, gender: "male" };
  //Expand object property/value pairs within an object
  const person = { name: "Bob", ...obj, favorite: "apple" };
  console.log(person); //{ name: 'Bob', age: 25, gender: 'male', favorite: 'apple' }
  //Objects cannot be expanded within the parentheses of console.log method
  //console.log(...obj);
}
myFunction();
