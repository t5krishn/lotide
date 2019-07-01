const middle = require('../middle');
const assert = require('chai').assert;


// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []

// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
// assertArraysEqual(middle([1,2,3,4,5]), [3]);
// assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
// assertArraysEqual(middle([1,2]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);


describe('#middle', () => {
  
  it("returns [] when [1] is inserted", () => {
    assert.deepEqual(middle([1]),[]);
  });
  
  it("returns [] when [1, 2] is inserted", () => {
    assert.deepEqual(middle([1, 2]),[]);
  });
  
  it("returns [2] when [1, 2, 3] is inserted", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
  
  it("returns [3] when [1, 2, 3, 4, 5] is inserted", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
  
  it("returns [2, 3] when [1, 2, 3, 4] is inserted", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });
  
  it("returns [3, 4] when [1, 2, 3, 4, 5] is inserted", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
  
});