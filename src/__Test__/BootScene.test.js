import 'jest-canvas-mock';
import BootScene from '../scenes/BootScene';

test('BootScene to be a function', () => {
  expect(typeof BootScene).toBe('function');
});

test('BootScene to not be undefined', () => {
  expect(typeof BootScene).not.toBe('undefined');
});