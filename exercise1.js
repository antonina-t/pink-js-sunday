// Welcome to the first exercise - here we practise array lookup.

// Replace undefined with the right code
function arrayInfo(arr) {
    console.log("Array info for " + JSON.stringify(arr) + ":");

    const length = arr.length;
    console.log("Length of the array is " + length);

    const firstElement = undefined;
    console.log("The first element is " + firstElement);

    const thirdElement = undefined;
    console.log("The third element is " + thirdElement);

    const lastElement = undefined;
    console.log("The last element is " + lastElement);

    const index3 = undefined;
    console.log("Index of element 3 is " + index3);

    const indexA = undefined;
    console.log("Index of element \"a\" is " + indexA);
}

arrayInfo([1,2,3]);
arrayInfo(["b",1,true,"a",15,"ZZZ",false]);
