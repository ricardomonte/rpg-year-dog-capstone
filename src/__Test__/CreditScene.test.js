import 'jest-canvas-mock';
import CreditScene from '../scenes/CreditScene';

const testCredits = new CreditScene();

test('CreditScene to be a function', () => {
  expect(typeof CreditScene).toBe('function');
});

test('CreditScene to not be undefined', () => {
  expect(typeof CreditScene).not.toBe('undefined');
});

test('CreditScene have property menu', () => {
  expect(testCredits).toHaveProperty('menu');
});

test('CreditScene do not have property attack', () => {
  expect(testCredits).not.toHaveProperty('attack');
});

test('CreditScene have property createMenu', () => {
  expect(testCredits).toHaveProperty('createMenu');
});