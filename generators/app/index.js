'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const ifEmpty = require('if-empty');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument('appname', {
      type: string => {
        return string.toLowerCase().replace(' ', '-');
      },
      required: false
    });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the kryptonian ' + chalk.red('generator-node-tdd') + ' generator!'
      )
    );

    const questions = [
      {
        name: 'name',
        message: 'Your name:',
        store: true,
        validate: ifEmpty('You have to provide name')
      },
      {
        name: 'email',
        message: 'Your email:',
        store: true,
        validate: ifEmpty('You have to provide email')
      },
      {
        name: 'website',
        message: 'Your website:',
        store: true,
        validate: ifEmpty('You have to provide website')
      },
      {
        name: 'moduleVersion',
        message: 'Preferred version to start:',
        store: true,
        default: '0.0.0'
      },
      {
        name: 'moduleLicense',
        message: 'License:',
        store: true,
        default: 'MIT'
      },
      {
        name: 'moduleName',
        message: 'Project name:',
        default: this.options.appname || this.contextRoot.split('/').pop()
      },
      {
        name: 'moduleDesc',
        message: 'Project description:'
      },
      {
        name: 'moduleKeywords',
        message: 'Project keywords (separated by commas):',
        filter: string => string.split(',')
      },
      {
        type: 'list',
        name: 'testDirectory',
        message: 'Where are you going to write your tests?',
        choices: ['src', 'test'],
        default: 'test'
      },
      {
        type: 'list',
        name: 'buildDirectory',
        message: 'How do you want to name the build directory?',
        choices: ['build', 'dist'],
        default: 'dist'
      }
    ];

    return this.prompt(questions).then(props => {
      this.props = props;
    });
  }

  writing() {
    if (this.options.appname) {
      mkdirp(this.options.appname);
      this.destinationRoot(this.destinationPath(this.options.appname));
    }

    const tpl = {
      name: this.props.name,
      email: this.props.email,
      website: this.props.website,
      moduleName: this.props.moduleName,
      moduleVersion: this.props.moduleVersion,
      moduleDesc: this.props.moduleDesc,
      moduleLicense: this.props.moduleLicense,
      moduleKeywords: this.props.moduleKeywords,
      testDirectory: this.props.testDirectory,
      buildDirectory: this.props.buildDirectory
    };

    const copy = (from, to) => {
      this.fs.copy(this.templatePath(from), this.destinationPath(to));
    };

    const copyTpl = (from, to) => {
      this.fs.copyTpl(this.templatePath(from), this.destinationPath(to), tpl);
    };

    copyTpl('package.json', 'package.json');
    copy('Dockerfile', 'Dockerfile');
    copy('babelrc', '.babelrc');
    copy('gitignore', '.gitignore');
    copy('src/index.js', 'src/index.js');
    copy('test/basic.test.js', `${tpl.testDirectory}/basic.test.js`);
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
