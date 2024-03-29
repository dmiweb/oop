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