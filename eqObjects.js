const assertEqual = require('./assertEqual.js').assertEqual;
const eqArrays = require('./assertArraysEqual.js').eqArrays;


const eqObjects = function(object1, object2) {
  if (!(Object.keys(object1).length === Object.keys(object2).length)) {
    return false;
  }

  for (let key in  object1) {
    if (!(typeof object1[key] === typeof object2[key])) {
      return false;
    }

    if (typeof object1[key] === 'object' && Array.isArray(key)) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object' && !Array.isArray(key)) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (!(object1[key] === object2[key])) {
        return false;
      }
    }
  }

  return true;
};

const cd2 = { c: "1", d: ["2", 3, 4] };

const cd = { c: cd2, d: ["2", 3] };
const dc = { d: ["2", 3], c: cd2 };
// console.log(eqObjects(cd, dc)); // => true

// console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd2, cd2), true);


// console.log(eqArrays([1,2], [1,"2"]));