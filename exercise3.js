// Welcome to the third exercise - here we practise handling objects.

// Set weather to an empty object
const weather = {};
console.log(`Here is the empty weather object:\n ${JSON.stringify(weather)}`);

// Give the weather object some properties. Examples: temperature (number), wind (nubmber), windDirection (string), sunny (boolean)
weather.temperature = 16;
weather.isSunny = true;
weather.windDir = "north";
console.log(`Here is the populated weather object:\n ${JSON.stringify(weather)}`);

// Create a person object with some properties, in one statement
const person = {
    name: "James Bond",
    isCool: true
};
console.log(`Here is the person object:\n ${JSON.stringify(person)}`);

// Create an object smallWallet containing property coins, which is an array of numbers
const smallWallet = {
    coins: [5, 10]
};
console.log(`Here is the small wallet:\n ${JSON.stringify(smallWallet)}`);

// Create an object bigWallet containing a property banknotes which is an array of numbers 
// and merge it with the smallWallet above, using the spread syntax
const bigWallet = {
    banknotes: [100, 500],
    ...smallWallet
};
console.log(`Here is the big wallet:\n ${JSON.stringify(bigWallet)}`);