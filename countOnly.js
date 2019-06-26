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
    if((allItems[item] in itemsToCount) && itemsToCount[allItems[item]]) {
      if(allItems[item] in result) {
        result[allItems[item]]++;
      } else {
        result[allItems[item]] = 1;
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);