# Dir Array

Present requested directory as array of file names.

## Installation

Intall via npm
```
npm i dir-array
```

## Usage

Package directory:
```
.
|-- package.json
|-- readme.md
|-- src
|   `-- dir-array.js
`-- test
    `-- test.spec.js
```

Code:
```javascript
const DirArray = require('dir-array');

var cwd = new DirArray(process.cwd());
cwd; // => ['src', 'test', 'package.json', 'readme.md']

var test = cwd.dir('test');
test; // => ['test.spec.js']
```


## License

MIT license
