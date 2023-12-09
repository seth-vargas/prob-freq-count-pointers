const { moduleExpression } = require("@babel/types");

function twoArrayObject(keys, values) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    // Use the value at the corresponding index if available, otherwise use null
    result[keys[i]] = i < values.length ? values[i] : null;
  }

  return result;
}

module.exports = { twoArrayObject };
