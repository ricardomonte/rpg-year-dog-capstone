import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { getScore, setScore } from '../util/getScore';

jest.mock('../../src/__mocks__/request.js')

beforeEach(() => {
  fetch.resetMocks();
})

test('saves the score and username to the leaderBoard', () => {
  setScore('ramn', 90)
    .then((score) => expect(score.result)
      .toBe('Leaderboard score created correctly.'));
});

test('get score and username from the leaderBoard', () => {
  getScore().then((scores) => expect(typeof scores).toEqual('object'));
});


test('ranking contains the user', () => {
  getScore().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          score: 90,
          user: 'ramn',
        }),
      ]),
    );
  }).catch(() => { });
});