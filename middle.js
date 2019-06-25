
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



const middle = function(arr) {
  let len = arr.length;
  let half = len / 2;

  if (arr.length < 3) return [];

  if ((len % 2) === 0) {
    return [arr[half - 1], arr[half]];
  } else {
    return [arr[Math.floor(half)]];
  }
};

assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
