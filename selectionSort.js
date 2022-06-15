// Sort a list from smallest to largest

const findSmallest = function(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const selectionSort = function(arr) {
    newArr = [];

    while (arr.length) {
        smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }

    return newArr;
}

// test it out
console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]

