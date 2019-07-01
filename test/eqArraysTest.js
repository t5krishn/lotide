const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

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
