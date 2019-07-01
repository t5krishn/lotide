// const assertArraysEqual = require('./assertArraysEqual.js').assertArraysEqual;


const letterPositions = function(sentence) {
  const result = {};

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === ' ') {
      continue;
    }

    if (result[sentence[index]]) {
      result[sentence[index]].push(index);
    } else {
      result[sentence[index]] = [index];
    }
  }

  return result;
};

module.exports = letterPositions;

// let result1 = letterPositions("hello");

// assertArraysEqual(result1["h"],[0]);
// assertArraysEqual(result1["e"],[1]);
// assertArraysEqual(result1["l"],[2, 3]);
// assertArraysEqual(result1["o"],[4]);

// result1 = letterPositions("lighthouse in the house");

// assertArraysEqual(result1["l"],[0]);
// assertArraysEqual(result1["i"],[1, 11]);
// assertArraysEqual(result1["g"],[2]);
// assertArraysEqual(result1["h"],[3, 5, 15, 18]);
// assertArraysEqual(result1["t"],[4, 14]);
// assertArraysEqual(result1["o"],[6, 19]);
// assertArraysEqual(result1["u"],[7, 20]);
// assertArraysEqual(result1["s"],[8, 21]);
// assertArraysEqual(result1["e"],[9, 16, 22]);
