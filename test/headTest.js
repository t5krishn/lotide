const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5,3,1]),5);

assertEqual(head(["ASD",'asd',"asdasd"]),"ASD");

assertEqual(head([51,31,1]),51);

assertEqual(head([]),undefined);