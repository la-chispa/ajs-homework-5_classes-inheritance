import Zombie from '../zombie';

test('function automatically set true values', () => {
  const zombie = new Zombie('Dunharrow');

  expect({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Dunharrow', type: 'Zombie',
  }).toEqual(zombie);
});

test('Name of character is true', () => {
  const zombie = new Zombie('Dunharrow');
  const name = zombie.validateName();

  expect(name).toBeTruthy();
});

test('Type of character is true', () => {
  const zombie = new Zombie('Dunharrow');
  const type = zombie.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const zombie = new Zombie('12345678901');
    zombie.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const zombie = new Zombie('Z');
    zombie.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const zombie = new Zombie('Dunharrow');
    zombie.type = 'Not dead';
    zombie.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});
