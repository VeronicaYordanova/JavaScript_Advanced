let expect = require('chai').expect;
let mathEnforcer = require('../_04_Math_Enforcer').mathEnforcer;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it("should return undefined for non-number parameter",function () {
            expect(mathEnforcer.addFive("5")).to.be.equal(undefined);
        });
        it("should return correct result for positive number", function () {
            expect(mathEnforcer.addFive(10)).to.be.equal(15);
        });
        it("should return correct result for negative number", function () {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
        });
        it("should return correct result for floating point number", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });
    describe('subtractTen', function () {
        it("should return undefined for non-number parameter", function () {
            expect(mathEnforcer.subtractTen('5')).to.be.equal(undefined);
        });
        it("should return correct result for positive number", function () {
            expect(mathEnforcer.subtractTen(25)).to.be.equal(15);
        });
        it("should return correct result for negative number", function () {
            expect(mathEnforcer.subtractTen(-3)).to.be.equal(-13);
        });
        it("should return correct result for floating point number", function () {
            expect(mathEnforcer.subtractTen(25.35)).to.be.closeTo(15.35, 0.01);
        });
    });
    describe('sum', function () {
       it('should return undefined for non-number parameter', function () {
           expect(mathEnforcer.sum('5', 5)).to.be.equal(undefined);
           expect(mathEnforcer.sum(5, '5')).to.be.equal(undefined);
       });
       it('should return correct result for integer number', function () {
           expect(mathEnforcer.sum(5,-3)).to.be.equal(2);
       });
        it("should return correct result for floating point parameters", function () {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
        });
    });
});