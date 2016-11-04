var assert = require("chai").assert;
var luhn = require("../lib/luhn");

describe("luhn", function() {
  describe("digitsOf", function() {
    it("should turn 123 into [1,2,3]", function() {
      assert.deepEqual(luhn.digitsOf(123), [1, 2, 3]);
    });
  });
  describe("stepDown", function() {
    it("should return a slice", function() {
      assert.deepEqual(luhn.stepDown([1, 2, 3, 4, 5, 6, 7, 8], -1, -2), [8, 6, 4, 2]);
      assert.deepEqual(luhn.stepDown([1, 2, 3, 4, 5, 6, 7, 8], -2, -2), [7, 5, 3, 1]);
    });
  });
  describe("isValidLuhnCard", function() {
    it("should return true", function() {
      assert.isTrue(luhn.isValidLuhnCard(79927398713));
    });
    it("should return true", function() {
      assert.isTrue(luhn.isValidLuhnCard(4351939048152074));
    });
    it("should return false", function() {
      assert.isFalse(luhn.isValidLuhnCard(79927398710));
    });
    it("should return false", function() {
      assert.isFalse(luhn.isValidLuhnCard(79927398711));
    });
  });
});
