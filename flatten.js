// const assertArraysEqual = require('./assertArraysEqual.js').assertArraysEqual;



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

module.exports = flatten;
// assertArraysEqual(flatten([1, 2, [3, [4,10,11]], [5,6], [7]]), [1, 2, 3, 4, 10, 11, 5, 6, 7]);
// assertArraysEqual(flatten([1, 2]), [1, 2]);
// assertArraysEqual(flatten([[1, 2]]), [1, 2]);
// assertArraysEqual(flatten([[3, 4], [5,6]]), [3, 4, 5, 6]);
