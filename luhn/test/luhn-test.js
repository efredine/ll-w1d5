var assert = require("chai").assert;
var expect = require("chai").expect;
var luhn = require("../lib/luhn");

describe("luhn", function() {
  describe("digitsOf", function() {
    it("should turn 123 into [1,2,3]", function() {
      expect(luhn.digitsOf(123)).to.deep.equal([1, 2, 3]);
    });
  });
  describe("stepDown", function() {
    it("should return a slice", function() {
      expect(luhn.stepDown([1, 2, 3, 4, 5, 6, 7, 8], -1, -2)).to.deep.equal([8, 6, 4, 2]);
      expect(luhn.stepDown([1, 2, 3, 4, 5, 6, 7, 8], -2, -2)).to.deep.equal([7, 5, 3, 1]);
    });
  });
  describe("isValidLuhnCard", function() {
    it("should return true", function() {
      expect(luhn.isValidLuhnCard(79927398713)).to.be.true;
    });
    it("should return true", function() {
      expect(luhn.isValidLuhnCard(4351939048152074)).to.be.true;
    });
    it("should return false", function() {
      expect(luhn.isValidLuhnCard(79927398710)).to.be.false;
    });
    it("should return false", function() {
      expect(luhn.isValidLuhnCard(79927398711)).to.be.false;
    });
  });
});
