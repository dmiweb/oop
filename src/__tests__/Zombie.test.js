import Zombie from '../js/Zombie';

test('testing create object class Zombie', () => {
  const testObject = {
    name: 'Jason',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }

  const zombie = new Zombie('Jason', 'Zombie');

  expect(testObject).toEqual(zombie);
});

test('testing function damage if health = 0', () => {
  const zombie = new Zombie('Jason', 'Zombie');
  zombie.health = 0;
  zombie.damage(10);
  expect(zombie.health).toBe(0);
});

test('testing function damage', () => {
  const zombie = new Zombie('Jason', 'Zombie');
  zombie.damage(10);
  expect(zombie.health).toBe(91);
});