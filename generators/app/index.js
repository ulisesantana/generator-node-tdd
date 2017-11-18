'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the kryptonian ' + chalk.red('generator-node-tdd') + ' generator!'
      )
    );

    // Const prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    const copy = path => {
      this.fs.copy(this.templatePath(path), this.destinationPath(path));
    };

    const copyHidden = path => {
      this.fs.copy(this.templatePath(path), this.destinationPath(`.${path}`));
    };

    copy('package.json');
    copy('Dockerfile');
    copyHidden('babelrc');
    copyHidden('gitignore');
    copy('src/index.js');
    copy('test/basic.test.js');
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
