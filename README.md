# Algorithms - Notes from books/courses, JavaScript versions of algorithms 
## Sources
* Aditya Y. Bhargava, *Grokking Algorithms*
* Princeton's Algorithms Course (Coursera)

## TOC - Algorithms Covered So Far
* simple search
* [binary search](#binary-search)
* [selection sort](#selection-sort)
* [quicksort](#quicksort)
* merge sort
* breadth-first search
* Dijkstra's algorithm
* quick find
* quick union
    * with weighting and path compression

## TOC - Data Structures Covered so Far
* arrays
* sets
* linked lists
* queues
* stacks
    * call stacks
* hash tables
* graphs
    * directed and undirected graphs
* trees

## Other Concepts, Techniques, etc.
* running time
    * Big O Notation
* traveling salesperson problem
* recursion
* divide and conquer
* greedy algorithms
* approximation algorithms
* NP-completeness
* dynamic connectivity problem

## Algorithms

### simple search

### binary search

```
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
```

### selection sort

```
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

```

### quicksort

Version 1: Use the first element of the array as the pivot

```
const quicksort = function(arr) {
    if (arr.length < 2) {
        return arr;
    } 
    
    let pivot = arr[0];
    let less = arr.slice(1).filter(el => el <= pivot);
    let greater = arr.slice(1).filter(el => el > pivot);

    return quicksort(less).concat([pivot], quicksort(greater));
    
}

```

Version 2: Use a random element as pivot

```
const quicksort = function(arr) {
    if (arr.length < 2) return arr;
    
    let randomIndex = Math.floor(arr.length * Math.random());
    let pivot = arr[randomIndex];
    arr.splice(randomIndex, 1)
    let less = arr.filter(el => el <= pivot);
    let greater = arr.filter(el => el > pivot);

    return quicksort(less).concat([pivot], quicksort(greater));
}
```


## Data Structures



### arrays
* store items right next to each other in memory (thus, the amount of space allotted for an array in memory has to be specified upon its creation)
* along with [linked lists](#linked-lists), one of the two most basic ways of storing items in memory
* Run Time for Common Operations:
    * Reading:  O(1)
        * **Why so fast?** *If you know the index and location of **any** other element in the array and the index of the given element you want to read, you can compute the location of the given element in memory.*
    * Insertion: O(n)
        * **Why so slow?** *Inserting into an array requires moving all of the elements that follow it in order to make room. It also may require finding a new space in memory (and new insertion for each element) for the whole array (i.e. **resizing**) if an insertion pushes the array to go over its allotted space.*
    * Deletion: O(n)
        * **Why so slow?** *Deletion requires shifting all the following elements back together after a deleted element*




### linked lists