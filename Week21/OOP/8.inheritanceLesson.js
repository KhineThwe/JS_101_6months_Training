class Enemy {
  //parent class or base class
  constructor(power) {
    this.power = power;
  }
  attack = () => console.log(`I'm attacking with a power of ${this.power}v !`);
}

class Alien extends Enemy {
  //inheritance // child class or derived class
  constructor(name, phrase, power) {
    super(power);
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  fly = () => console.log("Fly");
  sayPhrase = () => console.log(this.phrase);
}

const alien1 = new Alien("Ali", "I am all alien", 10);
alien1.attack();

const enemy = new Enemy(100);
enemy.attack();
