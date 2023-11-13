function myFunction() {
  const numbers = { a: 10, b: 30, c: 20, d: 40 };
  let a, b, c, d;
  //Declaration of variables and split assignment of object values (enclosed in round brackets to avoid being judged as a block)
  ({ a, b, c, d } = numbers);
  console.log(a, b, c, d); //10 30 20 40

  //Declaration of constants and split assignment of object values
  const { name, age, favorite } = { name: "Bob", age: 25, favorite: "apple" };
  console.log(name, age, favorite); //Bob 25 apple
}
myFunction();
