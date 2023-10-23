function add(number1, number2) {
  var result = number1 + number2;
  return result;
}
function subtract(number1, number2) {
  var result = number1 - number2;
  return result;
}
function multiply(number1, number2) {
  var result = number1 * number2;
  return result;
}

function divide(number1, number2) {
  var result = number1 / number2;
  return result;
}
function main() {
  console.log("Calculator Program!!!");
  let total = 0;
  var firstNumber = 9;
  var secondNumber = 10;
  var option = "/";

  if (option === "+") {
    total = add(firstNumber, secondNumber); //add function
  } else if (option === "-") {
    total = subtract(firstNumber, secondNumber); //subtract function
  } else if (option === "*") {
    total = multiply(firstNumber, secondNumber); //multiply function
  } else if (option === "/") {
    total = divide(firstNumber, secondNumber); //divide function
  }
  console.log(`Total number: ${total}`);
}

main();
