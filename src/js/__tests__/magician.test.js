import Magician from '../magician';

test('function automatically set true values', () => {
  const magician = new Magician('Gandalf');

  expect({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Gandalf', type: 'Magician',
  }).toEqual(magician);
});

test('Name of character is true', () => {
  const magician = new Magician('Gandalf');
  const name = magician.validateName();

  expect(name).toBeTruthy();
});

test('Type of character is true', () => {
  const magician = new Magician('Gandalf');
  const type = magician.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const magician = new Magician('12345678901');
    magician.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const magician = new Magician('M');
    magician.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const magician = new Magician('Gandalf');
    magician.type = 'Wizard';
    magician.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});
