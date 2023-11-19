function myFunction() {
  const numbers = [10, 20, 30, 40];
  let a, b, c, d;
  //   a = numbers[0];
  //   b = numbers[1];
  //   c = numbers[2];
  //   d = numbers[3];
  [a, b, c, d] = numbers; //split array assignment//destructuring

  console.log(a, b, c, d);

  const [name, age, favorite] = ["Bob", 25, "apple"];
  console.log(name, age, favorite);
}
myFunction();
