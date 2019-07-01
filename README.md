# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @t5krishn/lotide`

**Require it:**

`const _ = require('@t5krishn/lotide/index');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of the array
* `tail(array)`: Returns the array without the first element
* `middle(array)`: Returns an array with the middle one or two element(s)
* `assertArraysEqual(array, array)`: Prints true/false assertion depending on whether two arrays are equal
* `assertEqual(arg1, arg2)`: Prints true/false assertion on whether arguments are equal
* `assertObjectsEqual(object, object)`: Returns true/false depending on whether two objects are equal
* `countLetters(string)`: Counts number of letters and returns it as an object, with values as letter counts
* `countOnly(array)`: Counts the number of elements and returns it as an object, with values as the array value
* `eqArrays(array, array)`: Returns a boolean depending on whether two arrays are equal
* `eqObjects(object, object)`: Returns a boolean depending on whether two objects are equal
* `findKey(object, callback)`: Finds the key that is returned from the object, using the callback function
* `findKeyByValue(object, value)`: Finds the key of the object that contains the value
* `flatten(array)`: Returns a flattened array with only one sublevel
* `letterPositions(string)`: Returns an object with the positions of the letters stored as an array
* `map(array, callback)`: Returns an array that has the callback function applies to each element
* `takeUntil(array, callback)`: Returns the array with all elements that return false from the callback, and it stops adding when an element returns true from the callback
* `without(array, array)`: Returns an array with values that are not in the second array