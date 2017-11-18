import * as assert from 'assert';

describe('Basic tests', () => {
  it('Green test', () => {
    assert.equal('1', true);
    assert.notDeepStrictEqual(1, true);
    assert.deepStrictEqual(true, true);
  });
});
