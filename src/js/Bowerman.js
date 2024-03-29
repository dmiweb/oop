import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 25;
    this.defence = 25;
  }
  
  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}