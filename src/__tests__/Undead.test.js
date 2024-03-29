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

test('testing function damage if health = 0', () => {
  const undead = new Undead('Jason', 'Undead');
  undead.health = 0;
  undead.damage(10);
  expect(undead.health).toBe(0);
});

test('testing function damage', () => {
  const undead = new Undead('Jason', 'Undead');
  undead.damage(10);
  expect(undead.health).toBe(92.5);
});