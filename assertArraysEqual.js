const eqArrays = require('./eqArrays.js');



const assertArraysEqual = function(array1, array2) {
  let check = eqArrays(array1, array2);

  if (check) {
    console.log(`\u2705 \u2705 \u2705 Arrays Equal: ${array1} === ${array2}`);
  } else {
    console.log(`\u274c \u274c \u274c Arrays Not Equal: ${array1} !== ${array2}`);
  }
};


module.exports = assertArraysEqual;


// assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual([1, false, "3"], [1, false, "3"]); // => should PASS
// assertArraysEqual([], []); // => should PASS
// assertArraysEqual([1], [1]); // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
// assertArraysEqual(["ave", "2as", "qwe"], ["ave", "2as", "qwe"]); // => should PASS
// assertArraysEqual(["asd", "cvb", "fdg"], ["ASD", "CVB", "FDG"]); // => should FAIL
