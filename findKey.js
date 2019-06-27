const assertEqual = require('./assertEqual.js').assertEqual;



const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }

  return undefined;
};


// ------------------------------------------------------------------------------------
// TESTS START
// ------------------------------------------------------------------------------------

let test1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const cb1 = x => x.stars === 2;

assertEqual(findKey(test1, cb1), "noma");

// ------------------------------------------------------------------------------------



const cb2 = x => x.stars === 3;

assertEqual(findKey(test1, cb2), "Akaleri");

// ------------------------------------------------------------------------------------


const cb3 = x => x.stars > 3;

assertEqual(findKey(test1, cb3), undefined);

// ------------------------------------------------------------------------------------


const cb4 = x => x.stars > 2;

assertEqual(findKey(test1, cb4), "Akaleri");