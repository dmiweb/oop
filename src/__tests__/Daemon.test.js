import Daemon from '../js/Daemon';

test('testing create object class Daemon', () => {
  const testObject = {
    name: 'Jason',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }

  const daemon = new Daemon('Jason', 'Daemon');

  expect(testObject).toEqual(daemon);
});