// const assertEqual = require('./assertEqual.js').assertEqual;
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



module.exports = eqArrays;

