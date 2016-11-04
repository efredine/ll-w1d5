var assert = require("chai").assert;
var isValidLuhnCard = require("../lib/luhn");

describe("luhn", function() {
  it("should return true for 79927398713", function() {
    assert.isTrue(isValidLuhnCard(79927398713));
  });
});
