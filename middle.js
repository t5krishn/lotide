// const assertArraysEqual = require('./assertArraysEqual.js');


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

module.exports = middle;


