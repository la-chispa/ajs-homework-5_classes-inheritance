import Character from '../app';

test('function automatically set true values', () => {
  const character = new Character('Xo', 'Daemon');

  expect({
    health: 100, level: 1, name: 'Xo', type: 'Daemon',
  }).toEqual(character);
});
