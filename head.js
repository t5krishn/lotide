const  assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c \u274c \u274c Assertion Failed: ${actual} !== ${expected}`);
  }

};


const head = function(arr){

  return arr[0];

};

assertEqual(head([5,3,1]),5);

assertEqual(head(["ASD",'asd',"asdasd"]),"ASD");

assertEqual(head([5,31,1]),51);

assertEqual(head([]),undefined);