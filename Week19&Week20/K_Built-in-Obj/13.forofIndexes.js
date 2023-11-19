function myFunction() {
  const members = ["Bob", "Tom", "Jay"];

  for (const [index, member] of members.entries()) {
    console.log(`${index}: Hello ${member}`);
  }
}

myFunction();
