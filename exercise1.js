// Welcome to the first exercise - here we practise array lookup.

// Replace undefined with the right code
function arrayInfo(arr) {
    console.log("Array info for " + JSON.stringify(arr) + ":");

    const length = arr.length;
    console.log("Length of the array is " + length);

    const firstElement = arr[0];
    console.log("The first element is " + firstElement);

    const thirdElement = arr[2];
    console.log("The third element is " + thirdElement);

    const lastElement = arr[arr.length - 1];
    console.log("The last element is " + lastElement);

    const index3 = arr.indexOf(3);
    console.log("Index of element 3 is " + index3);

    const indexA = arr.indexOf("a");
    console.log("Index of element \"a\" is " + indexA);
}

arrayInfo([1,2,3]);
arrayInfo(["b",1,true,"a",15,"ZZZ",false]);
