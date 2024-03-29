export default class Character {
  constructor(name, type) {
    this.name = name;

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    this.type = type;

    const validType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validType.includes(type)) {
      throw new Error('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.health = 100;
    this.level = 1;
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
}