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