function myFunction() {
  const array = [["Bob"], ["Tom"], ["Jay"], ["Dan"]];
  const element = "Tom";
  console.log(array);
  console.log(array.flat()); //2 dimensional array to 1 D
  console.log(`${element}　is at ${array.flat().indexOf(element)}`);
}
myFunction();
