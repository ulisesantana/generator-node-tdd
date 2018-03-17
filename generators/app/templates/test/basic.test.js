import * as assert from 'assert';

suite('Basic tests', () => {
  test('Green test', () => {
    assert.equal('1', true);
    assert.notDeepStrictEqual(1, true);
    assert.deepStrictEqual(true, true);
  });
});
