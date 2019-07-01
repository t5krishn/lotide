// const assertEqual = require('./assertEqual.js').assertEqual;


const countLetters = function(str) {
  let noSpace = str.split(' ').join('');
  const result = {};

  for (const letter of noSpace) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

// let result1 = countLetters("hello");

// assertEqual(result1["h"], 1);
// assertEqual(result1["e"], 1);
// assertEqual(result1["l"], 2);
// assertEqual(result1["o"], 1);

// result1 = countLetters("aaaaa bbbbb ee aaa bbb ccc");

// assertEqual(result1["a"], 8);
// assertEqual(result1["b"], 8);
// assertEqual(result1["e"], 2);
// assertEqual(result1["c"], 3);

module.exports = countLetters;