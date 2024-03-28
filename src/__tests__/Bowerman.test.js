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