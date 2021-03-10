import 'jest-canvas-mock';
import Player from '../entities/Player';
import Enemy from '../entities/Enemies';
import GameScene from '../scenes/GameScene';

jest.mock('../../src/entities/Player');
jest.mock('../../src/entities/Enemies');

beforeEach(() => {
  Player.mockClear();
  Enemy.mockClear();
});

const testGame = new GameScene();

test('Gamescene is a funtion', () => {
  expect(typeof GameScene).toBe('function');
});

test('GameScene is not undefined', () => {
  expect(typeof GameScene).not.toBe('undefined');
});

test('Player will be called', () => {
  testGame.createPlayer({ start: { x: 1, y: 1 } });
  expect(Player).toHaveBeenCalledTimes(1);
});

test('Player will not be called', () => {
  expect(Player).not.toHaveBeenCalled();
});

test('Enemy will be called', () => {
  const testSpawn = { objects: [{ x: 0, y: 0 }] };
  testGame.createEnemies(testSpawn);
  expect(Enemy).toHaveBeenCalledTimes(1);
});

test('Enemy will be called twice', () => {
  const testSpawn = { objects: [{ x: 0, y: 0 }, { x: 1, y: 2 }] };
  testGame.createEnemies(testSpawn);
  expect(Enemy).toHaveBeenCalledTimes(2);
});

test('Enemy will be not be called', () => {
  expect(Enemy).not.toHaveBeenCalled();
});
