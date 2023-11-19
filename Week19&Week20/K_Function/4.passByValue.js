function myFunction() {
  const x = 10; //00001 memory address
  console.log(`value of func1_(x): ${func1_(x)}`); //value of func1_(x):11
  console.log(`value of x : ${x}`); //value of x: 10
}
function func1_(y) {
  //y=10
  //10
  y += 1; //y=10+1
  return y; //11
}
//for string,number,boolean   --- primitive data
//pass by value

myFunction();
