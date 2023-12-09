const { exportAllDeclaration, moduleExpression } = require("@babel/types");

function constructNote(message, letters) {
  // Create an object to store the frequency of each letter in the letters string
  const letterFreq = {};

  // Count the frequency of each letter in the letters string
  for (const letter of letters) {
    letterFreq[letter] = (letterFreq[letter] || 0) + 1;
  }

  // Check if there are enough letters to construct the message
  for (const char of message) {
    if (letterFreq[char] && letterFreq[char] > 0) {
      letterFreq[char] -= 1;
    } else {
      // If a required letter is not available, return false
      return false;
    }
  }

  // If all required letters are available, return true
  return true;
}

module.exports = { constructNote };
