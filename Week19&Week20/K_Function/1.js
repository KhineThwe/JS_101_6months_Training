function myFunction() {
  logNumbers_(1, 2, 3); //x=1,y=2
  logNumbers_(1); //x=1,y=undefined
}

function logNumbers_(x, y) {
  console.log(`x: ${x},y:${y}`);
}

myFunction();
