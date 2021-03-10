import 'jest-canvas-mock';
import PreloadScene from '../scenes/PreloadScene';

test("PreloadScene to be a function",() => {
  expect(typeof PreloadScene).toBe('function')
})

test("PreloadScene to not be undefined",() => {
  expect(typeof PreloadScene).not.toBe('undefined')
})