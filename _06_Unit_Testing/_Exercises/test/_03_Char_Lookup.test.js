let expect = require('chai').expect;
let lookupChar = require('../_03_Char_Lookup').lookupChar;

describe("lookupChar", function () {
    it('with a non-string first parameter, should return undefined', function () {
        expect(lookupChar(13, 0)).to.equal(undefined, 'The function did not return the correct result!')
    });
    it('with a non-number second parameter, should return undefined', function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'The function did not return the correct result!')
    });
    it('with a floating point number second parameter, should return undefined', function () {
        expect(lookupChar('pesho', 3.14)).to.equal(undefined, 'The function did not return the correct result!');
    });
    it('with an incorrect index value, should return "Incorrect index"', function () {
        expect(lookupChar('pesho', 13)).to.equal('Incorrect index', 'The function did not return the correct value!')
    });
    it('with a negative index value, should return "Incorrect index"', function () {
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index', 'The function did not return the correct value!')
    });
    it('with an index value equal to length of the string, should return "Incorrect index"', function () {
        expect(lookupChar('stamat', 6)).to.equal('Incorrect index', 'The function did not return the correct value!')
    });
    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('pesho', 0)).to.equal('p', 'The function did not return the correct value!')
    });
    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('stamat', 3)).to.equal('m', 'The function did not return the correct value!')
    });
});