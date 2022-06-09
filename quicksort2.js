const quicksort = function(arr) {
    if (arr.length < 2) return arr;
    
    let randomIndex = Math.floor(arr.length * Math.random());
    let pivot = arr[randomIndex];
    arr.splice(randomIndex, 1)
    let less = arr.filter(el => el <= pivot);
    let greater = arr.filter(el => el > pivot);

    return quicksort(less).concat([pivot], quicksort(greater));
}

// test
console.log(quicksort([10, 5, 2, 3])); // should return [2, 3, 5, 10];