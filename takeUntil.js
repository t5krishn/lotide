const assertArraysEqual = require('./assertArraysEqual.js').assertArraysEqual;

const takeUntil = function(array, callback) {
  const result = [];

  for (let element of array) {
    if (callback(element)) {
      break;
    }
    result.push(element);
  }
  

  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
 
assertArraysEqual(results1, [1,2,5,7,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood' ]);
