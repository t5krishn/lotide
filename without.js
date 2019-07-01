


const without = function(source, itemsToRemove) {
  let result = [];

  for (let srcIndex = 0; srcIndex < source.length; srcIndex++) {
    let inRemove = false;

    for (let rmIndex = 0; rmIndex < itemsToRemove.length; rmIndex++) {
      if (source[srcIndex] === itemsToRemove[rmIndex]) inRemove = true;
    }

    if (!inRemove) result.push(source[srcIndex]);
  }

  return result;
};

module.exports = without;

// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without([1, 2, 3], []), [1,2,3]);
// assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
// assertArraysEqual(without([1, 1, 3, 4, 2, 3], [1, 2, 3]), [4]);
// assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

// // Check array modification
// let a = ["hi", "hello", "yellow"];

// without(a, ["hi"]);

// assertArraysEqual(a, ["hi", "hello", "yellow"]);