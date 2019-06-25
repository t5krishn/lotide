
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

const flatten = function(arr) {
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    if (!Array.isArray(arr[index])) {
      result.push(arr[index]);
    } else {
      // for (let inner = 0; inner < arr[index].length; inner++) {
      //   result.push(arr[index][inner]);
      // }
      result = result.concat(flatten(arr[index]));
    }
  }

  return result;
};

assertArraysEqual(flatten([1, 2, [3, [4,10,11]], [5,6], [7]]), [1, 2, 3, 4, 10, 11, 5, 6, 7]);
assertArraysEqual(flatten([1, 2]), [1, 2]);
assertArraysEqual(flatten([[1, 2]]), [1, 2]);
assertArraysEqual(flatten([[3, 4], [5,6]]), [3, 4, 5, 6]);
