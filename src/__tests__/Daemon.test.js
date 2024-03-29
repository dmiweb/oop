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

test('testing function damage if health = 0', () => {
  const daemon = new Daemon('Jason', 'Daemon');
  daemon.health = 0;
  daemon.damage(10);
  expect(daemon.health).toBe(0);
});

test('testing function damage', () => {
  const daemon = new Daemon('Jason', 'Daemon');
  daemon.damage(10);
  expect(daemon.health).toBe(94);
});