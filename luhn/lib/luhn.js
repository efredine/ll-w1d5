/*
From wikipedia, https://en.wikipedia.org/wiki/Luhn_algorithm.
Tthe following implements the algorithm in python:
def digits_of(number):
    return [int(i) for i in str(number)]

def luhn_checksum(card_number):
    digits = digits_of(card_number)
    odd_digits = digits[-1::-2]
    even_digits = digits[-2::-2]
    total = sum(odd_digits)
    for digit in even_digits:
        total += sum(digits_of(2 * digit))
    return total % 10

def is_luhn_valid(card_number):
    return luhn_checksum(card_number) == 0

*/

function sum(digits) {
  return digits.reduce((a, b) => a + b);
}

function digitsOf(number) {
  return String(number).split("").map(Number);
}

function stepDown(arr, start, step) {
  var result = [];
  for(let i = arr.length + start; i >= 0; i += step) {
    result.push(arr[i]);
  }
  return result;
}

function lunhChecksum(cardNumber) {
  let digits = digitsOf(cardNumber);
  let oddDigits = stepDown(digits, -1, -2);
  let evenDIgits = stepDown(digits, -2, -2);
  let total = sum(oddDigits);
  evenDIgits.forEach(digit => {
    total += sum(digitsOf(2 * digit));
  });
  return total % 10;
}

function isValidLuhnCard(cardNumber) {
  return lunhChecksum(cardNumber) === 0;
}

exports.isValidLuhnCard = isValidLuhnCard;
exports.digitsOf = digitsOf;
exports.stepDown = stepDown;