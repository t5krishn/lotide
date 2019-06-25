const  assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c \u274c \u274c Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
};



assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, false, "3"], [1, false, "3"]), true); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1], [1]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["ave", "2as", "qwe"], ["ave", "2as", "qwe"]), true); // => should PASS
assertEqual(eqArrays(["asd", "cvb", "fdg"], ["ASD", "CVB", "FDG"]), false); // => should PASS
