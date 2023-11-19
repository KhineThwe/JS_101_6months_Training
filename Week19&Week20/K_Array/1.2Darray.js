// https://silver-stitch-5cd.notion.site/03-Basic-syntax-of-Javascript-09acfde5c9a14011bb6f740560697fac
function myFunction() {
  const n = [10, 11, 12, 13]; //1D
  //         0    1   2   3
  //console.log(n[0])//10
  const numbers = [[10, 30, 20, 40], [11, 31, 21], [12]];
  //                   0                 1            2
  console.log(numbers[0]); //[10, 30, 20, 40]
  console.log(numbers[0][1]); //30

  numbers[2] = [22, 32]; //Overwrite the array itself at index2
  numbers[3] = [13]; //Index 3 does not exist, so the array is added as an element
  console.log(numbers); //[[10, 30, 20, 40], [11, 31, 21], [22, 32], [13]]
}

myFunction();
