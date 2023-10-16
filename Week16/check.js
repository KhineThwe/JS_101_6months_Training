let num1 = 5;
let num2 = 6;
let operator = "multiply";

let result;

switch (operator) {
  case "add":
    result = num1 + num2;
    console.log(`result = ${num1} + ${num2} = ${result}`);
    break;
  case "subtract":
    result = num1 - num2;
    console.log(`result = ${num1} - ${num2} = ${result}`);
    break;
  case "multiply":
    result = num1 * num2;
    console.log(`result = ${num1} * ${num2} = ${result}`);
    break;
  case "divide":
    result = num1 / num2;
    console.log(`result = ${num1} / ${num2} = ${result}`);
    break;
  default:
    console.log(
      "Invalid operator. Please Enter Correct Operator (add, subtract, multiply or divide)"
    );
}
