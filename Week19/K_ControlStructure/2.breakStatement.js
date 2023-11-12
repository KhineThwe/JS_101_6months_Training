function myFunction() {
  let num = 1;
  for (let i = 1; i <= 10; i++) {
    num *= 2; //num=2 if i=1
    //if i=2,num = 4
    if (num > 50) {
      break;
    }
    console.log(`Value of i: ${i},value of num: ${num}`);
  }
}
myFunction();
