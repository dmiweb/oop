import Magician from '../js/Magician';

test('testing create object class Magician', () => {
  const testObject = {
    name: 'Jason',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }

  const magician = new Magician('Jason', 'Magician');

  expect(testObject).toEqual(magician);
});

test('testing function damage if health = 0', () => {
  const magician = new Magician('Jason', 'Magician');
  magician.health = 0;
  magician.damage(10);
  expect(magician.health).toBe(0);
});

test('testing function damage', () => {
  const magician = new Magician('Jason', 'Magician');
  magician.damage(10);
  expect(magician.health).toBe(94);
});