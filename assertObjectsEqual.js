// const assertEqual = require('./assertEqual.js').assertEqual;
const eqObjects = require('./eqObjects.js').eqObjects;

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u274c \u274c \u274c Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }

};


// const cd2 = { c: "1", d: ["2", 3, 4] };

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd2, cd);

module.exports = {assertObjectsEqual};
