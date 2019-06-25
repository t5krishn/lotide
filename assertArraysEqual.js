
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
};


const assertArraysEqual = function(array1, array2) {
  let check =eqArrays(array1, array2);

  if(check) {
    console.log(`\u2705 \u2705 \u2705 Arrays Equal: ${array1} === ${array2}`);
  } else {
    console.log(`\u274c \u274c \u274c Arrays Not Equal: ${array1} !== ${array2}`);
  }
};



assertArraysEqual([1, 2, 3], [1, 2]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, false, "3"], [1, false, "3"]); // => should PASS
assertArraysEqual([], []); // => should PASS
assertArraysEqual([1], [1]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["ave", "2as", "qwe"], ["ave", "2as", "qwe"]); // => should PASS
assertArraysEqual(["asd", "cvb", "fdg"], ["ASD", "CVB", "FDG"]); // => should PASS
