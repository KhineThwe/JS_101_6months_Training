function myFunction() {
  logNumbers_("Bob", "Good morning"); //name="Bob",msg="Good morning"
  logNumbers_("Tom"); //name="Tom",msg="undefined"
}

function logNumbers_(name, msg = "Hello") {
  console.log(`name: ${name},message:${msg}`);
}

myFunction();
