import 'jest-canvas-mock';
import Title from '../scenes/Title';

const testGame = new Title();

test('Title to be a function', () => {
  expect(typeof Title).toBe('function');
});

test('Title to not be undefined', () => {
  expect(typeof Title).not.toBe('undefined');
});

test('Title have property setupMenuEvents', () => {
  expect(testGame).toHaveProperty('setupMenuEvents');
});

test('Title have property createMenu', () => {
  expect(testGame).toHaveProperty('createMenu');
});

test('Title do not have property destroyMenu', () => {
  expect(testGame).not.toHaveProperty('destroyMenu');
});