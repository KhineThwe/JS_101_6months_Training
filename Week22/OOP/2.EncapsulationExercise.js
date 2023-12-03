class Employee {
  #name; //private
  #rating; //private
  constructor(name, rating) {
    this.#name = name;
    this.#rating = rating;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setRating() {
    this.#rating = rating;
  }
  getRating() {
    return this.#rating;
  }
}

const employee = new Employee();
employee.setName("Khine");
console.log(employee.getName());
