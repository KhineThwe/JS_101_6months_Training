function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
} //constructor
function person1(a, b) {
  first_name = a;
  last_name = b;
}

//create new instances of person object
let p = new person("Khine", "Thwe");
console.log(p);
console.log(p.first_name);
console.log(p.last_name);

let p1 = new person("Justin", "Biber");
console.log(p1);
