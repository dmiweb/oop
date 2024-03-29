import Character from '../js/Character';

test('testing property name for throw new Error', () => {
  try {
    new Character('J', 'Bowman');
  } catch (error) {
    expect(error.message).toBe('Имя должно содержать от 2 до 10 символов');
  }
});

test('testing property type for throw new Error', () => {
  try {
    new Character('Jason', 'knight');
  } catch (error) {
    expect(error.message).toBe('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  }
});

test('testing function levelUp', () => {
  const character = new Character('Jason', 'Bowman');
  character.levelUp();
  expect(character.level).toBe(2);
});

test('testing function levelUp for throw new Error', () => {
  try {
    const character = new Character('Jason', 'Bowman');
    character.health = 0;
    character.levelUp();
  } catch (error) {
    expect(error.message).toBe('Нельзя повысить левел умершего');
  }
});

