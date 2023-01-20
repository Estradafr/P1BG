// * Classes and Constructors
class Monster {
  constructor(name, health, damage, gold, exp) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.gold = gold;
    this.xp = exp;
  }
  getName() {
    return this.name;
  }
  getHealth() {
    return this.health;
  }
  getDamage() {
    return this.damage;
  }
  getGold() {
    return this.gold;
  }
  getXp() {
    return this.xp;
  }
}

class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
}

// * Variables
let level = 1;
let charClass = "";
let health = 100;
let gold = 50;
let inventory = [];
let wield = [];

// * Query Selectors 
const leftButton = document.querySelector('#leftButton');
const middleButton = document.querySelector('#middleButton');
const rightButton = document.querySelector('#rightButton');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const levelNum = document.querySelector('#levelNum');
const healthNum = document.querySelector('#healthNum');
const goldNum = document.querySelector('#goldNum');

// * Game Content 
let caveMonsters = [
  new Monster("Slime", 90, 18, 5, 8),
  new Monster("Dire Wolf", 100, 21, 8, 10),
  new Monster("Goblin King", 115, 24, 11, 14)
]

function attackFun(defender, attacker) {
  results = defender.getHealth() - attacker.getDamage();
  return results;
}

let combat = attackFun(caveMonsters[0], caveMonsters[1]);