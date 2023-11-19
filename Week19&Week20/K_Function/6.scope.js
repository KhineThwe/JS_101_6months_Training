//Global Scope
//Local Scope
//Function Scope
//Block Scope
const msgGlobal = "Hello Global!";
function myFunction() {
  const msgLocal = "Hello Local!";

  if (true) {
    const msgBlock = "Hello Block!";
    console.log(msgBlock);
    console.log(msgGlobal);
    console.log(msgLocal);
  }
}
//Hello Global!
myFunction();
//
