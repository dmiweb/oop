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