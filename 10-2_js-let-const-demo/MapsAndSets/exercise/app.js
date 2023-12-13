//Maps and Sets Exercise

// **********************
//## **Quick Question #1**
//What does the following code return?
new Set([1,1,2,2,3,4])

/*Set(4) {1, 2, 3, 4}
[[Entries]]
0: 1
1: 2
2: 3
3: 4*/
// **********************

// **********************
//## **Quick Question #2**
//What does the following code return?

//...new Set("referee")].join("") // 'ref'
// **********************


// **********************
//## **Quick Questions #3**
//What does the Map ***m*** look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//Map(2) {Array(3) => true, Array(3) => false}
// **********************


// **********************
//## **hasDuplicate**
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
//hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false

//const hasDuplicate = arr => new Set(arr).size !== arr.length;

function hasDuplicate(array) {
	return array.length !== new Set(array).size;
}
// **********************


// **********************
//## **vowelCount**
//Write a function called vowelCount which accepts a string and returns a map where the keys are
//numbers and the values are the count of the vowels in the string.
// Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const map = new Map();
	for (let char of str.toLowerCase()) {
	  if (vowels.includes(char)) {
		if (map.has(char)) {
		  map.set(char, map.get(char) + 1);
		} else {
		  map.set(char, 1);
		}
	  }
	}
	return map;
}
  
// **********************
