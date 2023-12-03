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
  //private property
  #birthYear;

  constructor(name, phrase, power, speed, birthYear) {
    super(name, phrase, speed, power);
    this.species = "alien";
    this.#birthYear = birthYear; //assign
  }
  fly = () => console.log("Fly");
  howOld = () => console.log(`I was born in ${this.#birthYear}`);
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 100000);
console.log(alien1.name);
alien1.sayPhrase();
alien1.howOld();

console.log(alien1.phrase);
