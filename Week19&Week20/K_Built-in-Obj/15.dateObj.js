function myFunction() {
  console.log(new Date()); //Date and time of execution
  console.log(new Date(2020, 7, 17, 10, 28, 15));
  console.log(new Date("2020/07/17 10:28:15"));
  console.log(new Date(1594949295777));

  const d = new Date();
  console.log(new Date(d)); //Date and time of execution
}
myFunction();
