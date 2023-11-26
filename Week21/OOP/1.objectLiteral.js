let person = {
  first_name: "Khine",
  last_name: "Thwe",

  //method
  getFunction: function () {
    return `The name of the person is ${person.first_name} ${person.last_name}`;
  },

  //object within object
  phone_number: {
    mobile: "95977777777",
    landline: "6789",
  },
};

console.log(person.first_name);
console.log(person.getFunction());
console.log(person.phone_number.mobile);
