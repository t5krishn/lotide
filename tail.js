const  assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c \u274c \u274c Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {

  let [, ...end] = arr;

  return end;

};

const result = tail([1,2,3,4]);
assertEqual(result.length, 3);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

// Checks for modification of array
const sameArrCheck = [1,2,3,4,5];
tail(sameArrCheck);
assertEqual(sameArrCheck.length, 5);