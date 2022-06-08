const binarySearch = function(listArr, item) {
    let low = 0;
    let high = listArr.length - 1;
    let mid;

    while (low <= high) {
        mid = (low + high) / 2;
        guess = list[Math.floor(mid)];
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


console.log(binarySearch(myArr, 3));
