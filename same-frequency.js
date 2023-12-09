function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // If the lengths are different, the frequencies cannot be the same
  if (strNum1.length !== strNum2.length) {
    return false;
  }

  const frequencyCounter = {};

  // Count the frequency of digits in num1
  for (const digit of strNum1) {
    frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
  }

  // Compare the frequency of digits in num2
  for (const digit of strNum2) {
    // If the digit is not in frequencyCounter or its frequency is already 0, return false
    if (!frequencyCounter[digit]) {
      return false;
    }
    // Decrement the frequency of the digit
    frequencyCounter[digit] -= 1;
  }

  // If all digits have been processed and the counts match, return true
  return true;
}

module.exports = { sameFrequency };
