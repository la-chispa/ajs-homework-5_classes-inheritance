import Bowman from '../bowman';

test('function automatically set true values', () => {
  const bowman = new Bowman('Legolas');

  expect({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Legolas', type: 'Bowman',
  }).toEqual(bowman);
});

test('Name of character is true', () => {
  const bowman = new Bowman('Legolas');
  const name = bowman.validateName();

  expect(name).toBeTruthy();
});

test('Name of character is true', () => {
  const bowman = new Bowman('Legolas');
  const type = bowman.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const bowman = new Bowman('Legolas Greenleaf');
    bowman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const bowman = new Bowman('B');
    bowman.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const bowman = new Bowman('Legolas');
    bowman.type = 'Archer';
    bowman.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});
