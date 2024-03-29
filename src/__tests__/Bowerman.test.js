import Bowerman from '../js/Bowerman';

test('testing create object class Bowerman', () => {
  const testObject = {
    name: 'Jason',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }

  const bowerman = new Bowerman('Jason', 'Bowman');

  expect(testObject).toEqual(bowerman);
});

test('testing function damage if health = 0', () => {
  const bowerman = new Bowerman('Jason', 'Bowman');
  bowerman.health = 0;
  bowerman.damage(10);
  expect(bowerman.health).toBe(0);
});

test('testing function damage', () => {
  const bowerman = new Bowerman('Jason', 'Bowman');
  bowerman.damage(10);
  expect(bowerman.health).toBe(92.5);
});

