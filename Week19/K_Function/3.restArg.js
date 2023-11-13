function myFunction() {
  logMembers_("Bob", "Tom", "Ivy", "Jay");
}

function logMembers_(first, second, ...members) {
  //first="Bob"
  console.log(first, second);
  console.log(members); //Ivy
}
myFunction();
