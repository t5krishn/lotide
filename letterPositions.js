const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) return false;
  }

  return true;
};


const assertArraysEqual = function(array1, array2) {
  let check = eqArrays(array1, array2);

  if (check) {
    console.log(`\u2705 \u2705 \u2705 Arrays Equal: ${array1} === ${array2}`);
  } else {
    console.log(`\u274c \u274c \u274c Arrays Not Equal: ${array1} !== ${array2}`);
  }
};






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


let result1 = letterPositions("hello");

assertArraysEqual(result1["h"],[0]);
assertArraysEqual(result1["e"],[1]);
assertArraysEqual(result1["l"],[2, 3]);
assertArraysEqual(result1["o"],[4]);

result1 = letterPositions("lighthouse in the house");

assertArraysEqual(result1["l"],[0]);
assertArraysEqual(result1["i"],[1, 11]);
assertArraysEqual(result1["g"],[2]);
assertArraysEqual(result1["h"],[3, 5, 15, 18]);
assertArraysEqual(result1["t"],[4, 14]);
assertArraysEqual(result1["o"],[6, 19]);
assertArraysEqual(result1["u"],[7, 20]);
assertArraysEqual(result1["s"],[8, 21]);
assertArraysEqual(result1["e"],[9, 16, 22]);
