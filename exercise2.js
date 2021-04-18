// Welcome to the second exercise - here we practise changing (mutating) arrays.

// Replace undefined with an empty array
const arr = [];

// Modify arr to become [1,2,3] by using push
arr.push(1);
arr.push(2);
arr.push(3);
console.log(`arr should now be [1,2,3]:  ${JSON.stringify(arr)}`);

// Modify arr to become [1] by using pop
arr.pop();
arr.pop();
console.log(`arr should now be [1]: ${JSON.stringify(arr)}`);

// Modify arr to become [-1,0,1] by using unshift
arr.unshift(0);
arr.unshift(-1);
console.log(`arr should now be [-1,0,1]: ${JSON.stringify(arr)}`);

// Set the first element to 5 using [ ]
arr[0] = 5;
console.log(`arr should now be [5,0,1]: ${JSON.stringify(arr)}`);

// Reverse arr to become [1,0,5]
arr.reverse();
console.log(`arr should now be [1,0,5]: ${JSON.stringify(arr)}`);

// Modify arr to become [5] by using shift
arr.shift();
arr.shift();
console.log(`arr should now be [5]: ${JSON.stringify(arr)}`);

