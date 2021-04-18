// Welcome to the workshop! We will fill up this file during live coding :)

// Recap of variables and data types
const number = 1;
const b = false;
const text = "this is some text";
console.log("Here is my number: " + number);

// Arrays - creation, indexing, length, indexOf, includes
const arr = [1,2,3];
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr.length);

console.log(arr[arr.length - 1]);

console.log(arr.indexOf(2));

console.log(arr.includes(2));

const arr2 = ["hello", "pink"];
const arr3 = [1, "pink", true, [1,2,3]];

// Mutation of arrays - push, pop, shift, unshift, reverse
const arr4 = [];
arr4.push("i");
console.log(arr4);
arr4.push("n");
console.log(arr4);
arr4.push("k");
console.log(arr4);

arr4.pop();
console.log(arr4);

arr4.shift();
console.log(arr4);

arr4.unshift("i");
console.log(arr4);

arr4.unshift("p");
console.log(arr4);

arr4.push("k");
console.log(arr4);

arr4.reverse();
console.log(arr4);

arr4[0] = "p";
console.log(arr4);

arr4[7] = 123;
console.log(arr4);

// Objects - create, mutate, spread
// Immutable handling of arrays - concat, map, filter, spread

// EXTRA:
// More methods - some, every, reduce, sort
// Multidimensional arrays (tic-tac-toe), array of objects (card deck)
// Array and object descructuring
