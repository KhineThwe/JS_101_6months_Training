function myFunction() {
  const x = [10, 20, 30]; //for array,object
  console.log(`value of func2_(x): ${func2_(x)}`); //value of func2_(x):11,20,30
  console.log(`value of x: ${x}`); //value of x:11,20,30
}

function func2_(y) {
  //10,20,30

  y[0] += 1;
  return y;
  //11,20,30
}
myFunction();
