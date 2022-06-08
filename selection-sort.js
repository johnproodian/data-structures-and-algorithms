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
    for (let i = 0; i < arr.length; i++) {
        smallest = findSmallest(arr);
        newArr.push(smallest);
    }
    return newArr;
}

