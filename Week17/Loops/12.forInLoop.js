let person = {
  name: " Mg Mg ",
  age: 20,
  married: false,
  family: ["U Ba", "Daw Mya", "Su Su"],
  own: {
    car: "Toyota",
    bike: "Moutain Bike",
  },
};

for (x in person) {
  console.log(person[x]);
}
