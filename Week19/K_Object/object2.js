//Syntax
// object.property = value
// object['property'] = value

function myFunction() {
  const person = { name: "Bob", gender: "male", age: 25 };
  person.name = "Tom"; //replace Bob with Tom
  person["job"] = "Engineer"; //Add Engineer because job property does not exist
  console.log(person); //{name: 'Tom', gender: 'male', age: 25, job: 'Engineer'}
}
myFunction();
