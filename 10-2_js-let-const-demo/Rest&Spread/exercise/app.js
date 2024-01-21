// **********************
//Rest / Spread Operator Exercises
//Given this function:
function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function(num) {
	  return num % 2 === 0
	});
}
//Refactor it to use the rest operator & an arrow function:
const filterOutOdds_sol = (...nums) => nums.filter(num => num % 2 === 0);
// **********************

// **********************
//## **findMin**
//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.
function findMin(...args) {
	return Math.min(...args);
}
// **********************

// **********************
//## **mergeObjects**
//Write a function called ***mergeObjects*** that accepts two objects and returns a new object which 
//contains all the keys and values of the first object and second object.
function mergeObjects(obj1, obj2) {
	return { ...obj1, ...obj2 };
}
//const obj1 = { a: 1, b: 2 };
//const obj2 = { c: 3, d: 4 };
//console.log(mergeObjects(obj1, obj2));
// **********************

// **********************
//## **doubleAndReturnArgs**
//Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
	const doubledArr = arr.map(num => num * 2);
	const doubledArgs = args.map(num => num * 2);
	return [...doubledArr, ...doubledArgs];
}
//console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6));
// **********************

// **********************
//## **Slice and Dice!**
//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
//Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
	const randomIndex = Math.floor(Math.random() * items.length);
	return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};
  
/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
//const obj = { a: 1, b: 2 };
//const key = 'c';
//const value = 3;
//const result = addKeyVal(obj, key, value);
//console.log(result);

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
	const { [key]: deletedKey, ...rest } = obj;
	return rest;
};
//const obj = { a: 1, b: 2, c: 3 };
//const key = 'b';
//const result = removeKey(obj, key);
//console.log(result);

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
//const obj1 = { a: 1, b: 2 };
//const obj2 = { c: 3, d: 4 };
//const combineResult = combine(obj1, obj2);
//console.log(combineResult);

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({ ...obj, [key]: val });
//const originalObj = { a: 1, b: 2, c: 3 };
//const keyToUpdate = 'b';
//const updatedValue = 5;
//const updateResult = update(originalObj, keyToUpdate, updatedValue);
//console.log(updateResult);

// **********************
