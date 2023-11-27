class Enemy {
  constructor(name, phrase, power) {
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }
  sayPhrase = () => console.log(this.phrase);
  attack = () => console.log(`I'm attacking with a power of ${this.power}v !`);
}

class Bug extends Enemy {
  constructor(name, phrase, power) {
    super(name, phrase, power);
    this.species = "bug";
  }
  hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
  constructor(name, phrase, power) {
    super(name, phrase, power);
    this.species = "robot";
  }
  transform = () => console.log("Optimus prime!");
}

const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 10);
const Robot1 = new Robot("Tito", "I can cook,swim and dance!", 15);

console.log(bug1.power);
Robot1.attack();
