const  assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274c \u274c \u274c Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {

  const result = {};

  for (const item of allItems) {
    if ((item in itemsToCount) && itemsToCount[item]) {
      if (item in result) {
        // Above if statement can be done as result[item] which will be false if undefined is returned
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], undefined);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);