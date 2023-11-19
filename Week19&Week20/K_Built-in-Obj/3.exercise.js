function myFunction() {
  const str = "My name is Bob";
  const subStr = "Bob";

  if (str.includes(subStr)) {
    console.log(`${subStr} is included`);
  } else {
    console.log(`${subStr} is not included`);
  }

  const position = str.indexOf(subStr);
  if (position > -1) {
    console.log(`${subStr} is included at ${position}`);
  } else {
    console.log(`${subStr} is not included`);
  }
}

myFunction();
