class Alien {
  // Name of the class
  // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
  //default constructor
  //   constructor() {
  //     console.log("Hello!I am default constructor!");
  //   }
  constructor(name, phrase) {
    this.name = name; //Ali
    this.phrase = phrase; //I'm Ali the alien!
    this.species = "alien";
  }
  // These will be the object's methods.
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}

const alien = new Alien(); // instantiating a class
