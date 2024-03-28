export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');

    }

    this.type = type;

    if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie') {
      throw new Error('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;

    if (type === 'Bowman' || type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Swordsman' || type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === 'Magician' || type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack += this.attack * 20 / 100;
      this.defence += this.defence * 20 / 100;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100)
    }
  }
}