'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-node-tdd:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      '.babelrc',
      '.gitignore',
      'src/index.js',
      'test/basic.test.js'
    ]);
  });
});
