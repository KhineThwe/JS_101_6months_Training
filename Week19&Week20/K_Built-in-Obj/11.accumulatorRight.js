function myFunction() {
  const array = ["Bob", "Tom", "Jay"];

  console.log(
    array.reduce((accumulator, current) => accumulator + current, "Ivy") //left to right
  ); //IvyBob
  //BobTom
  //TomJay
  //IvyBobTomJay
  console.log(
    array.reduceRight((accumulator, current) => accumulator + current)
  ); //JayTomBob
}
myFunction();
