//syntax
//[var1,var2,..] = Array
function myFunction() {
  const numbers = [10, 20, 30, 40];
  console.log(numbers);
  console.log([0, ...numbers, 50]); //[0,10,20,30,40,50]
  console.log(...numbers);
}
myFunction();
