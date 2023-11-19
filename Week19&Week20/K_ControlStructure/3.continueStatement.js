function myFunction() {
  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      continue;
    }
    console.log(`value of i : ${i}`);
  }
}

myFunction();
