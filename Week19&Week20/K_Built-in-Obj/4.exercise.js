function myFunction() {
  const array = ["Bob", "Tom", "Jay", "Jame"];

  array.push("Dan"); //element 1 ku ko nout sone mhar htae tr
  console.log(array);

  array.unshift("Ivy"); //element 1 ku ko shae sone mhar htae tr
  console.log(array);

  array.reverse();
  console.log(array);

  array.sort();
  console.log(array);

  array.copyWithin(4, 0, 2);
  console.log(array);

  array.fill("TTT", 3, 5);
  console.log(array);

  console.log(array.pop());

  console.log(array.shift());

  console.log(`Array Before Splice: ${array}`); //[ 'Dan', 'Ivy', 'TTT','TTT]
  console.log(array.splice(2, 2, "Kim"));
  console.log(`Array After Splice: ${array}`);
}
myFunction();
