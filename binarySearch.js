const binarySearch = function(listArr, item) {
    let low = 0;
    let high = listArr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        let guess = listArr[mid];
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return;   
}

const myArr = [1, 3, 5, 7, 9];


console.log('index of 3: ' + binarySearch(myArr, 3)); // should return 1
console.log('index of -1: ' + binarySearch(myArr, -1)); // should return undefined