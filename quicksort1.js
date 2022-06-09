const quicksort = function(arr) {
    if (arr.length < 2) {
        return arr;
    } 
    
    let pivot = arr[0];
    let less = arr.slice(1).filter(el => el <= pivot);
    let greater = arr.slice(1).filter(el => el > pivot);

    return quicksort(less).concat([pivot], quicksort(greater));
    
}

// test it
console.log(quicksort([10, 5, 2, 3])); // should return [2, 3, 5, 10]

