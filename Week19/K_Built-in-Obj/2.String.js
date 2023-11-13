function myFunction() {
  let str = "My name is IT-Programmar";

  console.log(str.length);
  console.log(str.charAt(5));
  console.log(str.charCodeAt(0));

  str = str.concat("Age: 25 years old");
  console.log(str);
  console.log(str.includes("IT", 0)); //return boolean value
  console.log(str.indexOf("m")); //return index number first occurence
  console.log(str.lastIndexOf("m"));
}

myFunction();
