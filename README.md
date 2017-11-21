# generator-node-tdd [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A boilerplate for NodeJS projects with Mocha and Babel 

## Boilerplate

The posible structures of the boilerplate are the following ones:
```bash
.
├── dist
│   └── index.js
├── Dockerfile
├── node_modules
├── package.json
├── package-lock.json
├── src
│   └── index.js
└── test
    └── basic.test.js
```

```bash
.
├── dist
│   ├── basic.test.js
│   └── index.js
├── Dockerfile
├── node_modules
├── package.json
├── package-lock.json
└── src
    ├── basic.test.js
    └── index.js
```

And these are the scripts from the `package.json`:
```json
 "scripts": {
    "start": "node <%= buildDirectory %>/index.js",
    "start:babel": "babel-node src/index.js",
    "test": "mocha --require babel-core/register '<%= testDirectory %>/**/*.test.js'",
    "tdd": "npm test -- --watch",
    "build": "babel src -d <%= buildDirectory %>",
    "build:bytecode": "npm run build && nexe -i <%= buildDirectory %>/index.js -o <%= moduleName %>",
    "dev": "nodemon --watch src --exec babel-node src/index.js"
  },
```

## Installation

First, install [Yeoman](http://yeoman.io) and generator-node-tdd using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-node-tdd
```

Then generate your new project:

```bash
yo node-tdd
```

or let Yeoman to create the project directory:

```bash
yo node-tdd my-project
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Ulises Santana](https://ulisesantana.github.io)


[npm-image]: https://badge.fury.io/js/generator-node-tdd.svg
[npm-url]: https://npmjs.org/package/generator-node-tdd
[travis-image]: https://travis-ci.org/ulisesantana/generator-node-tdd.svg?branch=master
[travis-url]: https://travis-ci.org/ulisesantana/generator-node-tdd
[daviddm-image]: https://david-dm.org/ulisesantana/generator-node-tdd.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ulisesantana/generator-node-tdd
[coveralls-image]: https://coveralls.io/repos/ulisesantana/generator-node-tdd/badge.svg
[coveralls-url]: https://coveralls.io/r/ulisesantana/generator-node-tdd
