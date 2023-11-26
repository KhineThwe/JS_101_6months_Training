class Person {
  constructor(name, age) {
    this.name = name; //this --> self
    this.age = age;
  }
}

const p1 = new Person("Bob", 25);
p1.age += 5; //assign
p1.job = "Engineer";
console.log(p1);

const p2 = new Person("Tom", 32);
console.log(p2);
