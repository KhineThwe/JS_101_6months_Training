var marks = 91;
var grade;
switch (true) {
  case marks < 50:
    grade = "You fail the exam";
    break;
  case marks >= 50 && marks < 60:
    grade = "Grade D";
    break;
  case marks >= 60 && marks < 70:
    grade = "Grade C";
    break;
  case marks >= 70 && marks < 8:
    grade = "Grade B";
    break;
  case marks >= 80 && marks < 90:
    grade = "Grade A";
    break;
  case marks >= 90 && marks <= 100:
    grade = "Grade A+";
    break;
  default:
    grade = "No Register!!";
}
console.log(grade + ":" + marks);
