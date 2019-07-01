const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, false, "3"], [1, false, "3"]); // => should PASS
assertArraysEqual([], []); // => should PASS
assertArraysEqual([1], [1]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["ave", "2as", "qwe"], ["ave", "2as", "qwe"]); // => should PASS
assertArraysEqual(["asd", "cvb", "fdg"], ["ASD", "CVB", "FDG"]); // => should FAIL



