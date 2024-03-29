import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 10;
    this.defence = 40;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}