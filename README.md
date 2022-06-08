# Algorithms - Notes from books/courses, JavaScript versions of algorithms 
## Sources
* Aditya Y. Bhargava, *Grokking Algorithms*
* Princeton's Algorithms Course (Coursera)

## TOC - Algorithms Covered So Far
* simple Search
* binary Search
* selection Sort
* quicksort
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

## simple search

## binary search

``
    // list parameter must be a *sorted* array

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
``