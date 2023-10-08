// syntax
//switch (expression) {
//     case value1:
//       statements
//     case value2:
//       statements
//     // …
//     case valueN:
//       statements
//     default:
//       statements
//   }

var marks = 70;
switch (marks) {
  case 40: //if marks == 40
    console.log("Fail");
    break;
  case 60:
    console.log("Grade B");
    break;
  case 80:
    console.log("Grade A");
    break;
  default:
    console.log("No register!!!");
}
