import 'jest-canvas-mock';
import FightScene from '../scenes/FightScene'
import EnemyFight from '../entities/enemyFight';
import UiFight from '../UI/UIFight';
import HealthBar from '../hud/HealthBar';

jest.mock('../../src/entities/enemyFight');
jest.mock('../../src/UI/UIFight');
jest.mock('../../src/hud/HealthBar');


beforeEach(() => {
  EnemyFight.mockClear()
  UiFight.mockClear()
  HealthBar.mockClear()
})

const testGame = new FightScene()

test("FightScene to be a function",() => {
  expect(typeof FightScene).toBe('function')
})

test("FightScene to not be undefined",() => {
  expect(typeof FightScene).not.toBe('undefined')
})

test('UiFight will be called', () => {
  testGame.createUi()
  expect(UiFight).toHaveBeenCalled()
})

test('EnemyFight will be called', () => {
  testGame.createEnemy()
  expect(EnemyFight).toHaveBeenCalled()
})

test('HealthBar will be called', () => {
  testGame.createHealthBar()
  expect(HealthBar).toHaveBeenCalled()
})

test("FightScene have property createPlayerColliders",() => {
  expect(testGame).toHaveProperty('createPlayerColliders')
})

test("FightScene have property createEnemyColliders",() => {
  expect(testGame).toHaveProperty('createEnemyColliders')
})

test("FightScene have property reduceHp",() => {
  expect(testGame).toHaveProperty('reduceHp')
})

test("FightScene have property returnMainScene",() => {
  expect(testGame).toHaveProperty('returnMainScene')
})

test("FightScene do not have property createLayers",() => {
  expect(testGame).not.toHaveProperty('createLayers')
})
