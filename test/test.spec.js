const assert = require('assert');
const fs = require('fs');
const path = require('path');
const DirectoryArray = require('../');

describe('Directory Array', () => {
    it('Should scan passed dir', () => {
        var da = new DirectoryArray(__dirname);

        var filename = path.basename(__filename);

        assert.ok(da.indexOf(filename) > -1, 'Current file name listed');
    });

    it('Should return subdirectory with dir()', () => {
        var da = new DirectoryArray(__dirname);
        var test = da.dir('../test');

        var filename = path.basename(__filename);

        assert.ok(test.indexOf(filename) > -1, 'Current file name listed');
    });

    it('Should works with unexisted directories', () => {
        var da = new DirectoryArray(__dirname + '/unexisted-path');

        assert.ok(da.length === 0, 'Current file name listed');
    });

    it('Should return path string on toString call', () => {
        var da = new DirectoryArray('/tmp');

        assert.equal(da + '', '/tmp', 'Stringify with add');
        assert.equal(String(da), '/tmp', 'Stringify with String()');
    });
});
