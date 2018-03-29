'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-node-tdd:app', () => {

  it('creates files', async () => {
     let createFiles = (() => {
      return helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'Ulises Santana',
          email: 'ulises@foo.bar',
          moduleVersion: '0.1.0',
          moduleLicense: 'MIT',
          moduleName: 'test-project',
          moduleDesc: 'Is a test project',
          moduleKeywords: ['test','stuff','testing'],
          testDirectory: 'src',
          buildDirectory: 'build'
        });
    })();
     try {
       await createFiles;
       assert.file([
         'package.json',
         '.babelrc',
         '.gitignore',
         'src/index.js',
         'src/basic.test.js',
         'src/lib/logger.js'
       ]);
     } catch (err){
       assert.fail(err.actual, err.false, err.message);
     }

  });
});
