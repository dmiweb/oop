import Swordsman from '../js/Swordsman';

test('testing create object class Swordsman', () => {
  const testObject = {
    name: 'Jason',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }

  const swordsman = new Swordsman('Jason', 'Swordsman');

  expect(testObject).toEqual(swordsman);
});

test('testing function damage if health = 0', () => {
  const swordsman = new Swordsman('Jason', 'Swordsman');
  swordsman.health = 0;
  swordsman.damage(10);
  expect(swordsman.health).toBe(0);
});

test('testing function damage', () => {
  const swordsman = new Swordsman('Jason', 'Swordsman');
  swordsman.damage(10);
  expect(swordsman.health).toBe(91);
});