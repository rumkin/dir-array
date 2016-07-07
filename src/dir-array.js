"use strict";

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

        if (this.constructor !== DirArray) {
          Object.getOwnPropertyNames(DirArray.prototype)
            .forEach(key => Object.defineProperty(this, key, {
              configurable: false,
              enumerable: false,
              value: DirArray.prototype[key].bind(this)
            }));
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
