class Alien {
  // Name of the class
  // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
  constructor(name, phrase) {
    this.name = name; //Ali
    this.phrase = phrase; //I'm Ali the alien!
    this.species = "alien";
  }
  // These will be the object's methods.
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}

class Bug {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "bug";
  }
  hide = () => console.log("You can't catch me now!");
  sayPhrase = () => console.log(this.phrase);
}

class Robot {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "robot";
  }
  transform = () => console.log("Optimus prime!");
  sayPhrase = () => console.log(this.phrase);
}

const alien1 = new Alien("Ali", "I'm Ali the alien!");
console.log(alien1.name);
console.log(alien1.phrase);
alien1.sayPhrase();

const alien2 = new Alien("Lien", "Run for your lives!");
alien2.sayPhrase();

const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!");
bug1.sayPhrase();

const Robot1 = new Robot("Tito", "I can cook, swim and dance!");
Robot1.transform();
