// const assertEqual = require('./assertEqual.js').assertEqual;

const findKeyByValue = function(obj, value) {

  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }

  return undefined;
};


module.exports = findKeyByValue;





// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const empty = {};

// assertEqual(findKeyByValue(empty, "The Wire"), undefined);
// assertEqual(findKeyByValue(empty, ""), undefined);


// const identical = {
//   a : "abc",
//   b : "abc",
//   c : "cba"
// };

// assertEqual(findKeyByValue(identical, "abc"), "a");
// assertEqual(findKeyByValue(identical, "cba"), "c");