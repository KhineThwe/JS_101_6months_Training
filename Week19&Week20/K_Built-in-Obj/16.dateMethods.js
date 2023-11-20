function myFunction() {
  const d = new Date(2020, 6, 17, 10, 28, 15, 777);

  console.log(d.getFullYear()); //2020
  console.log(d.getMonth()); //6(=July)
  console.log(d.getDate()); //17
  console.log(d.getDay()); //5(=Friday)
  console.log(d.getHours()); //10
  console.log(d.getMinutes()); //30
  console.log(d.getSeconds()); //16
  console.log(d.getMilliseconds()); //778
  console.log(d.getTime()); //1594949295777

  console.log(d.getTimezoneOffset()); //-540

  d.setFullYear(2020);
  d.setMonth(0);
  d.setDate(1);
  d.setHours(1);
  d.setMinutes(11);
  d.setSeconds(11);
  d.setMilliseconds(111);

  console.log(d.toString()); //Wed Jan 01 2020 01:11:11
  console.log(d.toDateString()); //Wed Jan 01 2020
  console.log(d.toTimeString()); //01:11:11
  console.log(d.toJSON()); //2019-12-31T16:11:11.111Z
}
myFunction();
