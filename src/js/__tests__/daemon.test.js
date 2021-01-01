import Daemon from '../daemon';

test('function automatically set true values', () => {
  const daemon = new Daemon('Balrog');

  expect({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Balrog', type: 'Daemon',
  }).toEqual(daemon);
});

test('Name of character is true', () => {
  const daemon = new Daemon('Balrog');
  const name = daemon.validateName();

  expect(name).toBeTruthy();
});

test('Type of character is true', () => {
  const daemon = new Daemon('Balrog');
  const type = daemon.validateType();

  expect(type).toBeTruthy();
});

test('Name of character is wrong, too long', () => {
  function wrongName() {
    const daemon = new Daemon('12345678901');
    daemon.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Name of character is wrong, too short', () => {
  function wrongName() {
    const daemon = new Daemon('D');
    daemon.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('Type of character is wrong', () => {
  function wrongType() {
    const daemon = new Daemon('Balrog');
    daemon.type = 'Demon';
    daemon.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});
