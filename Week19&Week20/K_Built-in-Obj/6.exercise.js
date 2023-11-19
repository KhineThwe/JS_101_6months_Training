function myFunction() {
  const array = ["Bob", "Tommm", "Jay"];
  console.log(array.every((value) => value.length === 3)); //true
  console.log(array.some((value) => value === "Tom")); //true
  console.log(array.find((value) => value === "Tom"));
  console.log(array.findIndex((value) => value === "Tom"));

  console.log(array.filter((value) => value.charAt(1) === "o")); //["Bob","Tom"]
  console.log(array.map((value) => value.length));
}
myFunction();
