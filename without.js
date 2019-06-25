
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


const without = function(source, itemsToRemove) {
  let result = [];

  for (let srcIndex = 0; srcIndex < source.length; srcIndex++) {
    let inRemove = false;

    for (let rmIndex = 0; rmIndex < itemsToRemove.length; rmIndex++) {
      if (source[srcIndex] === itemsToRemove[rmIndex]) inRemove = true;
    }

    if (!inRemove) result.push(source[srcIndex]);
  }

  return result;
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], []), [1,2,3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

// Check array modification
let a = ["hi", "hello", "yellow"];

without(a, ["hi"]);

assertArraysEqual(a, ["hi", "hello", "yellow"]);