import 'jest-canvas-mock';
import InitialText from '../scenes/InitialText';

test("InitialText to be a function",() => {
  expect(typeof InitialText).toBe('function')
})

test("InitialText to not be undefined",() => {
  expect(typeof InitialText).not.toBe('undefined')
})