# forgiven-jasmine

[![Build Status](https://travis-ci.org/pghalliday/forgiven-jasmine.svg?branch=master)](https://travis-ci.org/pghalliday/forgiven-jasmine)
[![Build status](https://ci.appveyor.com/api/projects/status/5hy9m64msrx2qshb/branch/master?svg=true)](https://ci.appveyor.com/project/pghalliday/forgiven-jasmine/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/pghalliday/forgiven-jasmine/badge.svg?branch=master)](https://coveralls.io/github/pghalliday/forgiven-jasmine?branch=master)

[Jasmine](https://jasmine.github.io/) UI factory for [Forgiven](https://www.npmjs.com/package/forgiven)

## Usage

```shell
npm install --save-dev mocha forgiven forgiven-jasmine
```

```javascript
import {
  create,
} from 'forgiven';
import {
  jasmine,
} from 'forgiven-jasmine';

global.given = create(jasmine);
```

## Contributing

Run unit tests and build before pushing/opening a pull request.

- `npm test` - lint and test
- `npm start` - watch and build, etc with alarmist
- `npm run build` - run tests then build
- `npm run watch` - watch for changes and run build
- `npm run ci` - run build and submit coverage to coveralls
