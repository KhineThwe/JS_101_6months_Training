var marks = 91;
if (marks < 50) {
  console.log("You fail the exam " + marks);
} else if (marks >= 50 && marks < 60) {
  console.log("Grade D: " + marks);
} else if (marks >= 60 && marks < 70) {
  console.log("Grade C: " + marks);
} else if (marks >= 70 && marks < 80) {
  console.log("Grade B: " + marks);
} else if (marks >= 80 && marks < 90) {
  console.log("Grade A: " + marks);
} else if (marks >= 90 && marks <= 100) {
  console.log("Grade A+: " + marks);
} else {
  console.log("No Register!!");
}
