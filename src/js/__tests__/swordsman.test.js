import Swordsman from '../swordsman';

test('function automatically set true values', () => {
  const swordsman = new Swordsman('Aragorn');

  expect({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Aragorn', type: 'Swordsman',
  }).toEqual(swordsman);
});

test('Name of character is true', () => {
  const swordsman = new Swordsman('Aragorn');
  const name = swordsman.validateName();

  expect(name).toBeTruthy();
});

test('Type of character is true', () => {
  const swordsman = new Swordsman('Aragorn');
  const type = swordsman.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const swordsman = new Swordsman('12345678901');
    swordsman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const swordsman = new Swordsman('S');
    swordsman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const swordsman = new Swordsman('Aragorn');
    swordsman.type = 'Blade';
    swordsman.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});
