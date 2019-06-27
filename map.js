const assertArraysEqual = require('./assertArraysEqual.js').assertArraysEqual;

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

assertArraysEqual(map([1,2,3,4], ((e)=> e * 2)), [2, 4, 6, 8]);
assertArraysEqual(map(['a','b','c','d'], ((e)=> e + 'k')), ['ak', 'bk', 'ck', 'dk']);
assertArraysEqual(map([[1,2,3],[4,5],[6],[7,8,9,10]], ((e)=> e.length)), [3, 2, 1, 4]);
assertArraysEqual(map([{a:1,b:2},{a:2,c:4},{a:3,d:5},{a:4,e:6}], ((e)=> e.a)), [1, 2, 3, 4]);


