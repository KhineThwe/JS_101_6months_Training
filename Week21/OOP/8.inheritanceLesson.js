class Character {
  constructor(speed) {
    this.speed = speed;
  }
  move = () => console.log(`I'm moving at the speed of ${this.speed}`);
}
class Enemy extends Character {
  //parent class or base class
  constructor(name, phrase, power, speed) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }
  sayPhrase = () => console.log(this.phrase);
  attack = () => console.log(`I'm attacking with a power of ${this.power}v !`);
}

class Alien extends Enemy {
  //inheritance // child class or derived class
  constructor(name, phrase, power, speed) {
    super(name, phrase, speed, power);
    this.species = "alien";
  }
  fly = () => console.log("Fly");
}

class Bug extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "bug";
  }
  hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "robot";
  }
  transform = () => console.log("Optimus prime!");
}

const alien1 = new Alien("Ali", "I am all alien", 10, 50);
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);

const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120);

const Robot1 = new Robot("Tito", "I can cook,swim and dance!", 125, 30);
const Robot2 = new Robot("Terminator", "I can cook", 155, 400);

alien1.attack();
alien2.attack();
bug1.move();
