const fs = require('fs');
const path = require('path');
const DIR = Symbol('DirArray.Dir');

class DirArray extends Array {
    // Load directory structure if it exists
    constructor(dir) {
        super();

        this[DIR] = path.resolve(dir);

        if (fs.existsSync(this[DIR])) {
            this.push(...fs.readdirSync(this[DIR]));
        }
    }

    // Create Directory array from relative path
    // supports '..' for lookup
    dir(dir) {
        return new this.constructor(
            path.resolve(
                this[DIR], dir
            )
        );
    }

    toString() {
        return this[DIR];
    }
}

module.exports = DirArray;

DirArray.Dir = DIR;
