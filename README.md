# Data Structures and Algorithms - Notes from books/courses, JavaScript versions of code
I created this document to force myself to articulate the data structures and algorithms concepts that I am learning.

## Sources
* Aditya Y. Bhargava, *Grokking Algorithms*
* Gayle Laakmann McDowell, *Cracking the Coding Interview*
* Princeton's Algorithms Course (Coursera)
* *the Internet...*

## TOC - Algorithms Covered So Far
* [simple search](#simple-search)
* [binary search](#binary-search)
* [selection sort](#selection-sort)
* bubble sort
* [quicksort](#quicksort)
* [merge sort](#merge-sort)
* [run time comparison: sorting algorithms](#run-time-comparison:-sorting-algorithms)
* [breadth-first search](#breadth-first-search)
* [Dijkstra's algorithm](#dijkstra's-algorithm)
* depth-first search
* quick find
* quick union
    * with weighting and path compression
* reversing a linked list

## TOC - Data Structures Covered so Far
* [arrays](#arrays)
* [sets](#sets)
* [linked lists](#linked-lists)
* [stacks](#stacks)
    * [call stacks](#call-stacks)
* [queues](#queues)
* [hash tables](#hash-tables)
* [graphs](#graphs)
    * directed and undirected graphs
* [trees](#trees)
    * binary search tree??
* [tries](#tries)
* [heaps](#heaps)
* [vectors](#vectors)
* [arrayLists](#arrayLists)
* constructing your own DS
    * suffix-tree

## Other Concepts
* Big O notation
    * time complexity
    * space complexity
* [recursion](#recursion)
* divide and conquer
* NP-completeness
    * traveling salesperson problem
    * set-covering problem
* greedy algorithms
* approximation algorithms
* dynamic connectivity problem
* matching parenthesis problem
* manipulating variables/pointers
* [object oriented programming (how to use it)](#object-oriented-programming)
* bit manipulation
* memory (stack vs. heap)
* dynamic programming

## Algorithms

### simple search
    * **problem(s) that simple search can solve**:

    * **simple search *in short* **:

    * **run time**:

    * **code**:

    * **practice**

### binary search

* **problem(s) that binary search can solve:** (Search problem:) Given a sorted array and an item, find the index in the array of the item or return null if it doesn't exist.

* **binary search *in short*:** Compare the given element to the middle element of the array. Return the middle element's index if the item equals the middle element. Otherwise, if the middle element was too high, remove all the elements equal to the middle element and higher from consideration, and if the middle element was too low, remove all the elements equal to the middle element or lower from consideration. Then, repeat the comparison of the given item with the middle element of the elements that haven't been removed and repeat the removing accordingly until the middle element matches the item or you run out of elements (in which case the item does not exist as an element in the array).

* **run time**:

* **code**:

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

* **practice**:
   * LeetCode: 
      * [704.Binary Search (easy)](https://leetcode.com/problems/binary-search/)
      * [More?](https://leetcode.com/tag/binary-search/)


### selection sort

* **problem(s) that selection sort can solve**:

* **selection sort *in short***:

* **run time**:

* **code**:

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

* **practice**

### quicksort

* **problem(s) that quicksort can solve**:

* **quicksort *in short***:

* **run time**:

* **code**:

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

* **practice**:
    * LeetCode:
        * 

### merge sort

* **problem(s) that merge sort can solve:**:

* **merge sort *in short***:

* **run time**:

* **code**:

* **practice**:

### run time comparison: sorting algorithms

### breadth-first search (BFS)

* **problem(s) that BFS can solve:** Given a graph that contains nodes A and B,
    1. is there a path from node A to node B?
    2. what is the shortest path from node A to node B?

* **BFS *in short***: Create a queue and add node A's neighbors to it. Pop off the first neighbor, and check to see if it is (a) node B. If it isn't, add that neighbor node's neighbors to the queue (if they haven't already been checked) and continue to the next node in the queue. Repeat until node B is reached or all the nodes have been checked and no node B has been found.

* **run time**:

* **code**:

    ```
    const search(name) {

    }
    ```
* **practice**:

### Dijkstra's algorithm

* **problem(s) Dijkstra's algorithm can solve**:

* **Dijkstra's algorithm *in short***:

* **run time**:

* **code**:

* **practice**:


### depth-first search (DFS)

* **problem(s) depth-first search can solve**:

* **DFS *in short***:

* **run time**:

* **code**:

* **practice**:


###


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


### sets
* similar to arrays, but don't allow for duplicates
    * e.g. 
        ```
        let arr = [1, 2, 1, 2];
        let set = new Set (arr);
        console.log(set); // Set {1, 2}
        ```
* interesting set operations (not built into JavaScript??):
    * union: combining multiple sets
    * intersection: getting the items that show up in all of the given sets
    * difference: the result of subtracting items of one set from that of another

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


### stacks
* store items in a pile so that access is limited to the last item added to it (i.e. *LIFO* - 'last in, first out')
* two operations:
    * *push*: add an item to the top of the stack
    * *pop*: remove an item (the last one added) from the stack
* #### call stacks 
    * are created when functions are called in order for an interpreter to keep track of which function(s) is/are currently running.
    * when a function is called within another function, the inner function is placed on the top of the stack and executed while the functions below it are paused in a partially completed state until the current function (and the functions that it calls) are completed.

### queues
* store items according to *FIFO* ('first in, first out) principle--the element inserted first comes out first.
* items inserted from the *rear*, deleted from the *front*
* two operations:
    * *enqueue*: add item to the queue
    * *dequeue*: remove item from the queue

### hash tables (AKA "hash maps," "maps," "dictionaries," "associative arrays")
* **in short**: a *hash table* is an array (and often an array of linked lists) of values where:
    1. each value is associated with a unique key (key-value pairing),
    2. the index (i.e. the location) of each value is the result of running the key through the hash table's *hash function*.
* the significance of this is that we can look up the value associated with the key instantly (if the hash table's hash function is good).
* **in greater detail**:
    * *hash functions*: functions where you input a string (any data)--the key--and get back a number. More precisely, the string is converted to hashcode, then to an integer that serves as the index that the value will be stored at in the array.
        * **requirements of hash functions**:
            * *consistency*: needs to return the same index every time.
            * should map different strings to different indexes (though this isn't always possible)
        * **problems**:
            * *collisions* - when multiple keys are mapped to the same index. Sometimes this is unavoidable. When it happens, a linked list can be created at that index to store all the values that are mapped there (along with their keys).
        * **good hash functions**: limit collisions by spreading out values evenly throughout the array. 
* **performance (Reading)**:
    * With a good hash function: O(1)
    * With a bad hash function (worst case): O(n)
    * **Why?** The fewer the collisions, the more often reading can take advantage of the hash table being an array (O(1)). The more the collisions, the more linked list elements will have to be searched through for each lookup (closer to O(n)).
* **hash tables in JavaScript**
* **practice with hash tables**:
    * LeetCode:
        * [1. Two Sum (easy)](https://leetcode.com/problems/two-sum/)


### graphs
* use nodes (points on the graph) and edges (lines connecting nodes) to model sets of connections. 
    ### directed and undirected graphs
    * **directed graphs** - graphs where the edges are one-directional (point from one node to another). Two nodes *can* point to each other, but that requires separate two nodes.
    * **undirected graphs** - graphs where the edges are two-directional (each edge simultaneously points one node to another and vice versa)
    * **cycles** - where two nodes both point to each other--whether in a directed or undirected graph.
    ### weighted and unweighted graphs
    * **weighted graphs** - graphs in which the edges have numbers associated with them
    * **unweighted graphs** - graphs in which edges *do not* have numbers associated with them
 

### trees
* a graph in which no edges ever point back (i.e. they don't point to parents or siblings, only to their children, if they have any)

### tries (AKA 'suffix trees')
* trees that (usually?) store words by putting each of their letters at a node and connecting the letters for each word together by the tree's edges. Two words with the same prefix would be stored as the same branch as far as the prefixed letters go and then diverge.

* **practice**
    * LeetCode:
        * [208. Implement Trie (Prefix Tree) (easy)](https://leetcode.com/problems/implement-trie-prefix-tree/)

### heaps
* complete binary trees--i.e. trees where each parent has two children, and each level is filled before moving down to the next level to fill--where either (1) the root is the smallest value and all the values get bigger as you move down the tree (=min heap) or (2) the root is the largest value and all the values get smaller as you move down the tree (=max heap). It *does not* matter the order of the children nodes at each level
* insertion--top to bottom, left to right, as described above (complete binary tree); then, each inserted element is checked against its parent and swapped up with the parent if the new value is smaller (min heap) or larger (max heap), on and on until it finds a parent value it doesn't need to swap with.
    * deletion of root--add the most recently added value to the root and bubble it down (opposite of the previous check) until it is in the right place


* see for JS: https://www.youtube.com/watch?v=dM_JHpfFITs
    * two ways to implement--
        * (1) tree structures with nodes that contain left and right references (like a binary search tree?)
        * (2) as arrays:
            - array keeps track of the values (index 0 is null, 1 is root, 2 + 3 is second level, 4-7 is third level, so on); left child = i *2, right child is i * 2 + 1, parent is i/2

* **practice**


### vectors

### arrayLists
* tentatively: arrays that, when they become full, automatically create a new array double the size and copy the contents of the original into the new one. 
* can make calculating time complexity interesting


## Other Concepts, Techniques, etc.

### recursion
* the coding technique in which a function calls itself
* recursive functions have a *base case* and a *recursive case* in order to avoid going into an infinite loop from calling itself again and again:
    * **base case** - the condition that stops the function when it is met
    * **recursive case** - the condition that calls the function again when it is met


### manipulating variables/pointers
* **practice**:
    * LeetCode:
        * [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)


### object oriented programming
    * being able to construct a class/encapsulates logic in class method rather than main method like a for loop






