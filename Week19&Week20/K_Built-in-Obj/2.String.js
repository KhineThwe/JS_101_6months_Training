function myFunction() {
  let str = "My name is IT-Programmar";

  let str2 = "My name is Bob.";
  //         0123

  console.log(str.length);
  console.log(str.charAt(5));
  console.log(str.charCodeAt(0));

  str = str.concat("Age: 25 years old");
  console.log(str);
  console.log(str.includes("IT", 0)); //return boolean value
  console.log(str.indexOf("m")); //return index number first occurence
  console.log(str.lastIndexOf("m"));

  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
  console.log(str.slice(3, 7)); //name
  console.log(str.substring(3, 7)); //name
  console.log(str.split(" ")); //array

  console.log(str.startsWith("M")); //return boolean
  console.log(str2.startsWith("Bob", 11));
  console.log(str.endsWith("Bob"));

  console.log("Bob".repeat(3)); //BobBobBob
  console.log("   Bob   ".trim()); //Bob
}

myFunction();
