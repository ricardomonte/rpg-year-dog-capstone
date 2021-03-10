import 'jest-canvas-mock';
import GameOver from '../scenes/GameOver';

const testGame = new GameOver();

test('GameOver to be a function', () => {
  expect(typeof GameOver).toBe('function');
});

test('GameOver to not be undefined', () => {
  expect(typeof GameOver).not.toBe('undefined');
});

test('GameOver have property saveScore', () => {
  expect(testGame).toHaveProperty('saveScore');
});

test('GameOver do not have property GetScore', () => {
  expect(testGame).not.toHaveProperty('GetScore');
});