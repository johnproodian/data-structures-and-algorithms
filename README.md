# Data Structures and Algorithms - Notes from books/courses, JavaScript versions 
## Sources
* Aditya Y. Bhargava, *Grokking Algorithms*
* Princeton's Algorithms Course (Coursera)

## TOC - Algorithms Covered So Far
* simple search
* [binary search](#binary-search)
* [selection sort](#selection-sort)
* [quicksort](#quicksort)
* merge sort
* [breadth-first search](#breadth-first-search)
* Dijkstra's algorithm
* quick find
* quick union
    * with weighting and path compression

## TOC - Data Structures Covered so Far
* [arrays](#arrays)
* sets
* [linked lists](#linked-lists)
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

* **Problem(s) that binary search can solve:** (Search problem:) Given a sorted array and an item, find the index in the array of the item or return null if it doesn't exist.

* **binary search *in short*:** Compare the given element to the middle element of the array. Return the middle element's index if the item equals the middle element. Otherwise, if the middle element was too high, remove all the elements equal to the middle element and higher from consideration, and if the middle element was too low, remove all the elements equal to the middle element or lower from consideration. Then, repeat the comparison of the given item with the middle element of the elements that haven't been removed and repeat the removing accordingly until the middle element matches the item or you run out of elements (in which case the item does not exist as an element in the array).

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
### breadth-first search (BFS)

* **Problem(s) that BFS can solve:** Given a graph that contains nodes A and B,
    1. is there a path from node A to node B?
    2. what is the shortest path from node A to node B?

* **breadth-first search *in short*:** Create a queue and add node A's neighbors to it. Pop off the first neighbor, and check to see if it is (a) node B. If it doesn't, add node that neighbor's neighbors to the queue (if they haven't already been checked) and continue to the next node in the queue. Repeat until node B is reached or all the nodes have been checked and no node B has been found.

``
const search(name) {
    
}
``


## Data Structures



### arrays
* store elements right next to each other in memory (thus, the amount of space allotted for an array in memory has to be specified upon its creation)
* along with [linked lists](#linked-lists), one of the two most basic ways of storing items in memory
* Run Time for Common Operations:
    * Reading:  O(1)
        * **Why so fast?** *If you know the index and location of **any** other element in the array and the index of the given element you want to read, you can compute the location of the given element in memory--you **don't** need to run through all the elements to compute it.*
    * Insertion: O(n)
        * **Why so slow?** *Inserting into an array requires moving all of the elements that follow it in order to make room. It also may require finding a new space in memory (and new insertion for each element) for the whole array (i.e. **resizing**) if an insertion pushes the array to go over its allotted space.*
    * Deletion: O(n)
        * **Why so slow?** *Deletion requires shifting all the following elements back together after a deleted element.*


### linked lists
* store elements in various different places in memory, but keep the elements 'in order' by having each one **point** to (i.e. each on is **linked** to) the next element in the list.
* along with [arrays](#arrays), one of the two most basic ways of storing items in memory
* Run Time for Common Operations:
    * Reading: O(n)
        * **Why so slow?** *Unlike with arrays, a list element's index tells us nothing about where it is stored in memory. That information is held by the element before it, whose place is stored by the element before it, and so on. In order to find it in memory, we need to run through all of the elements prior to it in the list.*
    * Insertion: O(1)
        * **Why so fast?** *All that is required to insert an element into a list is to change the location that the previous element points to--no moving of any other elements in the list is required.*
    * Deletion: O(1)
        * **Why so fast?** *Just as with insertion, all that is required in deleting an item is to change the location that the previous item pointed to in memory (i.e. the location of the element to be deleted) to the location of the element that comes after the deleted element. No other elements need to be moved or changed.*
