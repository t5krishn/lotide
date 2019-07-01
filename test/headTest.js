// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

const head = require('../head');

// TEST CODE
// assertEqual(head([5,3,1]),5);

// assertEqual(head(["ASD",'asd',"asdasd"]),"ASD");

// assertEqual(head([51,31,1]),51);

// assertEqual(head([]),undefined);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns '5' for [5, 3, 1]", () => {
    assert.strictEqual(head([5,3,1]), 5); 
  });

  it('returns "ASD" for ["ASD","asd","asdasd"]]', () => {
    assert.strictEqual(head(["ASD",'asd',"asdasd"]),"ASD"); 
  });

  it("returns [51,31,1]),51)", () => {
    assert.strictEqual(head([51,31,1]), 51); 
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
});