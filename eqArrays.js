const assertEqual = require('./assertEqual.js').assertEqual;
const eqObjects = require('./eqObjects.js').eqObjects;


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let index = 0; index < array1.length; index++) {
    if (!(typeof array1[index] === typeof array2[index])) {
      return false;
    }
    // console.log("index:", index);

    // Array equal check
    if (typeof array1[index] === 'object' && Array.isArray(array1[index])) {
      if (!eqArrays(array1[index], array2[index])) {
        return false;
      }
    // Object equal check
    } else if (typeof array1[index] === 'object' && !Array.isArray(array1[index])) {
      if (!eqObjects(array1[index], array2[index])) {
        return false;
      }
    } else {
      if (array1[index] !== array2[index]) { 
        return false;
      }
    }
  }

  return true;
};



module.exports = {eqArrays};


assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, false, "3"], [1, false, "3"]), true); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([1], [1]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["ave", [1, 2, 3], "2as", "qwe"], ["ave", [1, 2, 3], "2as", "qwe"]), true); // => should PASS
assertEqual(eqArrays(["asd", "cvb", "fdg"], ["ASD", "CVB", "FDG"]), false); // => should PASS
assertEqual(eqArrays([[1,2,3],[[4,[5],[6,[7,8]]]]], [[1,2,3],[[4,[5],[6,[7,8]]]]]), true); // => should PASS
assertEqual(eqArrays([[1,2,3],[[4,[5],[6,[7,8]]]]], [1,2,3,[[4,[5],[6,[7,8]]]]]), false); // => should PASS

assertEqual(eqArrays([{a:1,b:2}, {c:4, d:3}], [{a:1,b:2}, {c:4, d:3}]), true); // => should PASS
