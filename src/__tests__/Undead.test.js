import Undead from '../js/Undead';

test('testing create object class Undead', () => {
  const testObject = {
    name: 'Jason',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }

  const undead = new Undead('Jason', 'Undead');

  expect(testObject).toEqual(undead);
});