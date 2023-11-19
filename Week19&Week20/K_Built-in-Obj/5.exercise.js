function myFunction() {
  const array = ["Bob", "Tom", "Jay", "Dan", "Ivy"];

  array.splice(1, 2, "Kim");
  console.log(array); //['Bob', 'Kim', 'Dan', 'Ivy']

  array.splice(1, 2);
  console.log(array); //['Bob', 'Ivy']

  array.splice(1, 0, "Leo");
  console.log(array); //['Bob', 'Leo', 'Ivy']
}

myFunction();
