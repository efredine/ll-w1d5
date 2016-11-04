var assert = require("chai").assert;
var luhn = require("../lib/luhn");

describe("luhn", function() {
  describe("digits_of", function() {
    it("should turn 123 into [1,2,3]", function() {
      assert.deepEqual(luhn.digits_of(123), [1,2,3]);
    });
  });
  describe("isValidLuhnCard", function() {
    it("should return true for 7992739L8713", function() {
      assert.isTrue(isValidLuhnCard("79927398713".split("").map(Number)));
    });
  });
});
