//average
function average(num) {
  var total = 0;
  for (var i = 0; i < num.length; i++) {
    total += num[i]; //total = total + num[i]// total = 0+1=1
    // total = 1+2=3
    // total=3+33
  }
  var average_number = total / num.length; //1023/7=>
  console.log(average_number);
}
var numbers = [1, 2, 33, 45, 66, 777, 99];
average(numbers); //function call
