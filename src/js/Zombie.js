import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 40;
    this.defence = 10;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}